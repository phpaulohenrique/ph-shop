import {
    ImageContainer,
    ProductContainer,
    ProductDetails,
    ImagesCarousel,
    ContainerPrice,
} from "@/styles/pages/product"
import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import Image from "next/image"
import Stripe from "stripe"
import { stripe } from "../../lib/stripe"
import { priceFormatter } from "@/util/priceFormater"
import { useRouter } from "next/router"
import ToastAlert from "@/components/Toast"
import { useCart } from "@/contexts/cart"
import { Wrapper } from "@/styles/global"
import { ToastDemo } from "@/components/ButtonAddProductToCart"
import { toast, ToastContainer } from "react-toastify"

import "react-toastify/dist/ReactToastify.css"
interface IProductProps {
    product: {
        id: string
        name: string
        imageUrl: string
        price: number
        formattedPrice: string
        description: string
        defaultPriceId: string
        oldPrice?: string
        amount: number
    }
}

export default function Product({ product }: IProductProps) {
    const { isFallback } = useRouter()

    const { addProduct, cart } = useCart()

    if (isFallback) {
        return <p>Loading...</p>
    }

    const { id } = product

    const isTheCurrentProductInTheCart = cart.findIndex((product) => product.id === id) >= 0

    const handleAddToCart = () => {
        addProduct(product)
        toast.success("Added to cart!")
    }

    return (
        <>
            <Head>
                <title>| Ignite Shop</title>
            </Head>

            <Wrapper>
                <ProductContainer>
                    <ImageContainer>
                        <Image src={product.imageUrl} width={380} height={380} alt={product.name} quality={100} />

                        {/* <ImagesCarousel>
                        <Image src={Iphone} width={100} height={80} alt="" quality={100} />
                        <Image src={Iphone} width={100} height={80} alt="" quality={100} />
                        <Image src={Iphone} width={100} height={80} alt="" quality={100} />
                    </ImagesCarousel> */}
                    </ImageContainer>

                    <ProductDetails>
                        <h1>{product.name}</h1>
                        <ContainerPrice>
                            <p>{product.oldPrice}</p>
                            <span>{product.formattedPrice}</span>
                        </ContainerPrice>

                        <p>
                            Uma nova forma de interação no iPhone. Um recurso essencial de segurança projetado para
                            salvar vidas. Câmera inovadora de 48 MP que revela detalhes impressionantes. Tudo com a
                            potência do chip para smartphone que é o máximo.
                        </p>
                        <button disabled={false} onClick={handleAddToCart}>
                            {/* { ? "Carregando..." : "Comprar agora"} */}
                            {isTheCurrentProductInTheCart ? "Product in Cart" : "Add to Cart"}
                        </button>
                    </ProductDetails>
                </ProductContainer>
            </Wrapper>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    // buscar os produtos mais vendidos / mais acessados

    return {
        paths: [{ params: { id: "prod_NAtPgk8Y7p2EOl" } }],
        fallback: true,
    }
}

export const getStaticProps: GetStaticProps<any | undefined, { id: string }> = async ({ params }) => {
    const productId = params?.id
    console.log(productId)

    if (productId) {
        const product = await stripe.products.retrieve(productId, {
            expand: ["default_price"],
        })

        const price = product.default_price as Stripe.Price

        const formattedCurrentPrice = price.unit_amount ? priceFormatter(price.unit_amount) : null
        const priceInDollar = price?.unit_amount ? price?.unit_amount : null

        let formattedOldPrice = price.unit_amount ? Number(price.unit_amount * 1) : null
        formattedOldPrice = price.unit_amount ? priceFormatter(price.unit_amount) : null

        console.log(product)

        return {
            props: {
                product: {
                    id: product.id,
                    name: product.name,
                    imageUrl: product.images[0],
                    description: product.description,
                    defaultPriceId: price.id,
                    oldPrice: formattedOldPrice,
                    formattedPrice: formattedCurrentPrice,
                    price: priceInDollar,
                },
            },
            revalidate: 60 * 60 * 1, // 1 hour
        }
    }

    return {
        redirect: "/",
        props: {},
    }
}
