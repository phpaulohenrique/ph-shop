import { stripe } from "@/lib/stripe"
import { Wrapper } from "@/styles/global"
import { Container, ContainerProducts } from "@/styles/pages/success"
import { GetServerSideProps } from "next"
import Head from "next/head"
import { CheckCircle } from "phosphor-react"
import Stripe from "stripe"
import Image from "next/image"
import { useCart } from "@/contexts/cart"
import { prismaSaveOrderBd, save, saveOrderBd } from "../../services/prisma-save-order-bd"
import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]"
import ImgNoAvailable from "../../assets/image_not_available.png"

interface IProductBought {
    id: string
    name: string
    price: number
    quantity: number
    description?: string | null
    imgUrl?: string | null
}
interface ISuccessProps {
    customerName: string
    products: IProductBought[]
}

export default function Success({ customerName, products }: ISuccessProps) {
    const { clearCart } = useCart()

    console.log(products)
    // clearCart()

    return (
        <>
            <Head>
                <title>Successful purchase! | PHShop</title>
                <meta name="robots" content="noindex" />
            </Head>

            <Wrapper>
                <Container>
                    <h1>Successful purchase!</h1>

                    <strong>
                        <CheckCircle size={32} color="#3cc832" weight="fill" />
                        Payment approved
                    </strong>

                    <span>Thank you for your purchase, {customerName}</span>
                    <span>The following products are on the way to your address</span>

                    <ContainerProducts>
                        {products?.map((product) => (
                            <div key={product.name}>
                                <Image
                                    // key={product.name}
                                    src={product.imgUrl ? product.imgUrl : ImgNoAvailable}
                                    width={120}
                                    height={120}
                                    alt=""
                                    quality={100}
                                />
                                <span>{product.name}</span>
                            </div>
                        ))}
                    </ContainerProducts>
                </Container>
            </Wrapper>
        </>
    )
}

// here I customized the stripe return type, as the stripe does not bring the correct typing when we expand other data in the return
interface IStripeResponse {
    data: {
        quantity: number

        price: {
            product: Stripe.Product
            unit_amount: number
        }
    }[]
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { query } = context
    const userSession = await getServerSession(context.req, context.res, authOptions)

    if (!query.session_id || !userSession?.user) {
        return {
            redirect: {
                permanent: false,
                destination: "/",
            },
        }
    }

    const sessionId = String(query.session_id)

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ["line_items", "line_items.data.price.product"],
    })

    const customerName = session?.customer_details?.name
    // console.log(session.line_items?.data)

    // const products = session.line_items?.data.map((product) => {
    //     return product.price?.product as Stripe.Product
    // })

    // const productsPrice = session.line_items?.data.map((product) => {
    //     return {
    //         quantity: product.quantity,
    //         price: product.price?.unit_amount,
    //     }
    // })

    const productsBoughtStripe = session.line_items as IStripeResponse

    const products = productsBoughtStripe.data.map((item) => {
        return {
            quantity: item.quantity,
            name: item.price.product.name,
            description: item.price.product.description,
            id: item.price.product.id,
            imgUrl: item.price.product.images[0],
            price: item.price.unit_amount,
        }
    })

    const productsFormatted = products.map((product) => {
        return {
            ...product,
            price: product.price / 100,
        }
    })
    console.log(productsFormatted)

    // const productsFormatted = session.line_items?.data.map((product, i) =>
    //     products?.map((p) => {
    //         return {
    //             id: p.id,
    //             quantity: product.quantity,
    //             price: product.price?.unit_amount,
    //             name: p.name,
    //             description: p.description,
    //             imgUrl: p.images[0],
    //         }
    //     })
    // )

    // console.log(a)

    // console.log(products)
    // const a = await stripe.checkout.sessions.listLineItems(
    //     sessionId

    //     // function (err, lineItems) {
    //     //     // asynchronously called
    //     // }
    // )

    // console.log(productsFormatted)

    // const productsFormatted = []

    if (products?.length) {
        await prismaSaveOrderBd({
            productsBought: products,
            userId: userSession?.user.id,
        })
    }

    // console.log(productsFormatted)
    // [0] pois nossa aplicacao só permite a compra 1 produto de cada vez, caso contrario precisaria alterar
    return {
        props: {
            customerName,
            products: productsFormatted,
        },
    }
}
