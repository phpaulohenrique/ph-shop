import { stripe } from "@/lib/stripe"
import { Wrapper } from "@/styles/global"
import { Container, ContainerProducts } from "@/styles/pages/success"
import { GetServerSideProps } from "next"
import Head from "next/head"
import { CheckCircle } from "phosphor-react"
import Stripe from "stripe"
import Image from "next/image"
import { useCart } from "@/contexts/cart"

interface ISuccessProps {
    customerName: string
    products: {
        name: string
        imageUrl: string
    }[]
}

export default function Success({ customerName, products }: ISuccessProps) {
    const { clearCart } = useCart()
    clearCart()

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
                        Payment accept!
                    </strong>

                    <span>Thank you for your purchase, {customerName}</span>
                    <span>The following products are on the way to your address</span>

                    <ContainerProducts>
                        {products.map((product) => (
                            <div key={product.name}>
                                <Image
                                    // key={product.name}
                                    src={product.imageUrl}
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

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    if (!query.session_id) {
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
    const products = session.line_items?.data.map((product) => {
        return product.price?.product as Stripe.Product
    })

    const productsFormatted = products?.map((product) => {
        return {
            name: product?.name,
            imageUrl: product?.images[0],
        }
    })

    console.log(productsFormatted)
    // [0] pois nossa aplicacao só permite a compra 1 produto de cada vez, caso contrario precisaria alterar
    return {
        props: {
            customerName,
            products: productsFormatted,
        },
    }
}
