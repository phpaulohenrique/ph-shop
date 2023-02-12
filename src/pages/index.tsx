import { Product } from "@/components/Product"
import { Container, ContainerProducts } from "@/styles/pages"
import { GetStaticProps } from "next"
import Head from "next/head"
import Link from "next/link"
import Stripe from "stripe"
import { stripe } from "../lib/stripe"
import { priceFormatter } from "@/util/priceFormater"
import { Wrapper } from "@/styles/global"

interface IHomeProps {
    products: {
        id: string
        name: string
        imageUrl: string
        price: string
    }[]
}

export default function Home({ products }: IHomeProps) {
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <Wrapper>
                <Container>
                    <aside>
                        <p>Filters</p>
                    </aside>
                    <ContainerProducts>
                        {products.map((product) => {
                            return (
                                <Link key={product.id} href={`product/${product.id}`}>
                                    <Product product={product} />
                                </Link>
                            )
                        })}
                    </ContainerProducts>
                </Container>
            </Wrapper>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const response = await stripe.products.list({
        expand: ["data.default_price"],
    })
    console.log(response.data)

    const products = response.data.map((product) => {
        const price = product.default_price as Stripe.Price
        const formattedPrice = price.unit_amount ? priceFormatter(price.unit_amount) : null

        return {
            id: product.id,
            name: product.name,
            imageUrl: product.images[0],
            price: formattedPrice,
        }
    })

    return {
        props: {
            products,
        },
        revalidate: 60 * 60 * 24 * 1, // 1 day
    }
}
