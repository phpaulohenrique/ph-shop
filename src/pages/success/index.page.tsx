import { stripe } from '@/lib/stripe'
import { Wrapper } from '@/styles/global'
import { Container, ContainerProducts } from '@/pages/success/styles'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { CheckCircle } from 'phosphor-react'
import Stripe from 'stripe'
import Image from 'next/image'
import { prismaSaveOrderBd } from '../../services/prisma-save-order-bd'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth].api'
import ImgNoAvailable from '../../assets/image_not_available.png'

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

interface IStripeResponse {
    data: {
        quantity: number
        price: {
            product: Stripe.Product
            unit_amount: number
        }
    }[]
}

export default function Success({ customerName, products }: ISuccessProps) {
    return (
        <>
            <Head>
                <title>Successful purchase! | PHShop</title>
                <meta name="robots" content="noindex" />
            </Head>

            <Wrapper>
                <Container>
                    <h2>Successful purchase!</h2>

                    <strong>
                        <CheckCircle size={32} color="#3cc832" weight="fill" />
                        Payment approved
                    </strong>

                    <span>Thank you, {customerName}!</span>
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

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { query } = context
    const userSession = await getServerSession(context.req, context.res, authOptions)

    if (!query.session_id || !userSession?.user) {
        return {
            redirect: {
                permanent: false,
                destination: '/',
            },
        }
    }

    const sessionId = String(query.session_id)

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ['line_items', 'line_items.data.price.product'],
    })

    const customerName = session?.customer_details?.name
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

    if (products?.length) {
        await prismaSaveOrderBd({
            productsBought: products,
            userId: userSession?.user.id,
        })
    }
    return {
        props: {
            customerName,
            products: productsFormatted,
        },
    }
}
