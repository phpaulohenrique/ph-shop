import { CircleNotch, Minus, Plus, ShoppingCartSimple, TrashSimple } from "phosphor-react"
import {
    Container,
    CartTable,
    TdAmount,
    TdProduct,
    ButtonHandleAmount,
    Total,
    ButtonCheckout,
    ContainerActions,
} from "../../styles/pages/cart"
import { useCart } from "@/contexts/cart"
import Image from "next/image"
import { useMemo, useState } from "react"
import { priceFormatter } from "@/util/priceFormatter"
import { Wrapper } from "@/styles/global"
import { ButtonBackToCatalog } from "@/components/ButtonBackToCatalog"
import { useSession } from "next-auth/react"
import { useRouter } from "next/router"
import { api } from "@/lib/axios"
import { toast } from "react-toastify"
import Head from "next/head"

export default function Cart() {
    const { cart, updateProductAmount, removeProduct } = useCart()
    const { status } = useSession()
    const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)
    const router = useRouter()

    const total = useMemo(
        () =>
            cart.reduce((acc, currentTotal) => {
                return acc + currentTotal.total
            }, 0),
        [cart]
    )

    const handleCheckout = async () => {
        setIsCreatingCheckoutSession(true)

        if (status !== "authenticated") {
            router.push("/login", { query: "redirecttocart" })
            toast.warning("Sign In with your account")
            return
        }

        // console.log(cart)
        const cartToCheckout = cart.map((product) => {
            return {
                price: product.defaultPriceId,
                quantity: product.amount,
            }
        })

        // console.log(cartToCheckout)

        try {
            const response = await api.post("/checkout", {
                products: cartToCheckout,
            })

            const { checkoutUrl } = response.data
            window.location.href = checkoutUrl
        } catch (error) {
            // conectar com uma ferramenta de observabilidade (datadog / sentry)
            alert("Falha ao redirecionar para o checkout!")
            setIsCreatingCheckoutSession(false)
        }
    }

    return (
        <>
            <Head>
                <title>Cart | PHShop</title>
            </Head>
            <Wrapper>
                <Container>
                    <h2>My Cart</h2>

                    {cart.length ? (
                        <>
                            <CartTable>
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Quantity</th>
                                        <th>Un. Price</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {cart?.map((product) => {
                                        return (
                                            <tr key={product.id}>
                                                <TdProduct>
                                                    <Image
                                                        src={product.imageUrl}
                                                        width={60}
                                                        height={60}
                                                        alt={product.name}
                                                        quality={100}
                                                    />
                                                    <span>{product.name}</span>
                                                </TdProduct>
                                                <TdAmount>
                                                    {/* {product.amount} */}
                                                    {product.amount === 1 ? (
                                                        <ButtonHandleAmount
                                                            type={"remove"}
                                                            onClick={() => removeProduct(product.id)}
                                                            title="Remove product"
                                                        >
                                                            <TrashSimple size={26} />
                                                        </ButtonHandleAmount>
                                                    ) : (
                                                        <ButtonHandleAmount
                                                            type={"remove"}
                                                            title="Remove - 1 quantity to the product"
                                                            onClick={() =>
                                                                updateProductAmount({
                                                                    productId: product.id,
                                                                    amount: product.amount - 1,
                                                                })
                                                            }
                                                        >
                                                            <Minus size={26} />
                                                        </ButtonHandleAmount>
                                                    )}
                                                    {product.amount}
                                                    <ButtonHandleAmount
                                                        type={"add"}
                                                        title="Add + 1 quantity to the product"
                                                        onClick={() =>
                                                            updateProductAmount({
                                                                productId: product.id,
                                                                amount: product.amount + 1,
                                                            })
                                                        }
                                                    >
                                                        <Plus size={26} />
                                                    </ButtonHandleAmount>
                                                </TdAmount>
                                                <td>{product.formattedPrice}</td>
                                                <td>{priceFormatter(product.total)}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>

                                <tfoot>
                                    <tr>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        <Total>{priceFormatter(total)}</Total>
                                    </tr>
                                </tfoot>
                            </CartTable>
                            <ContainerActions>
                                <ButtonBackToCatalog />
                                {isCreatingCheckoutSession ? (
                                    <ButtonCheckout
                                        className="loading"
                                        disabled={isCreatingCheckoutSession}
                                        onClick={handleCheckout}
                                    >
                                        <CircleNotch weight="bold" />
                                    </ButtonCheckout>
                                ) : (
                                    <ButtonCheckout disabled={isCreatingCheckoutSession} onClick={handleCheckout}>
                                        <ShoppingCartSimple weight="bold" size={20} />
                                        Checkout
                                    </ButtonCheckout>
                                )}
                            </ContainerActions>
                        </>
                    ) : (
                        <>
                            <span>There are no products in the cart yet!</span>
                            <ButtonBackToCatalog />
                        </>
                    )}
                </Container>
            </Wrapper>
        </>
    )
}
