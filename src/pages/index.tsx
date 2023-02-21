import { Product } from "@/components/Product"
import { Container, ContainerProducts } from "@/styles/pages"
import { GetStaticProps } from "next"
import Head from "next/head"
import Link from "next/link"
import Stripe from "stripe"
import { stripe } from "../lib/stripe"
import { priceFormatter } from "@/util/priceFormatter"
import { Wrapper } from "@/styles/global"
import { useRouter } from "next/router"
import { useSession } from "next-auth/react"

interface IHomeProps {
    products: {
        id: string
        name: string
        imageUrl: string
        price: string
    }[]
}

export default function Home({ products }: IHomeProps) {
    const data = useSession()
    const router = useRouter()
    // console.log(data)

    const search = router.query?.search ? String(router.query?.search).trim().toUpperCase() : ""
    // console.log(search)
    // console.log(products)
    const filteredProducts = products.filter((product) => product.name.includes(search))
    console.log(filteredProducts)

    // if (search?.trim()) {
    //     products.filter((product) => product.name.includes(search)).
    //     // products = [...filteredProducts]
    // }
    return (
        <>
            <Head>
                <title>PHShop</title>
            </Head>
            <Wrapper>
                <Container>
                    <aside>
                        <p>Filters</p>
                    </aside>
                    <ContainerProducts>
                        {products
                            .filter((product) => product.name.includes(search))
                            .map((product) => {
                                return (
                                    <Link key={product.id} href={`product/${product.id}`}>
                                        <Product product={product} />
                                    </Link>
                                )
                            })}
                        {!filteredProducts.length && <span>Ops, we don't have that product!</span>}
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
    // console.log(response.data)

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
