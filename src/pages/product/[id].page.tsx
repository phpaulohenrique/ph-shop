import {
    ImageContainer,
    ProductContainer,
    ProductDetails,
    ContainerPrice,
    Loading,
    ContainerActions,
} from '@/pages/product/styles'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Stripe from 'stripe'
import { stripe } from '../../lib/stripe'
import { priceFormatter } from '@/utils/priceFormatter'
import { useRouter } from 'next/router'
import { useCart } from '@/contexts/cart'
import { Wrapper } from '@/styles/global'
import { toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
import { CaretLeft, CircleNotch } from 'phosphor-react'
import Link from 'next/link'
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
    const { isFallback, push } = useRouter()

    const { addProduct, cart } = useCart()

    const { id } = product

    const isTheCurrentProductInTheCart = cart.findIndex((product) => product.id === id) >= 0

    const handleAddToCart = (redirectToCart: string = '') => {
        addProduct(product)
        toast.success('Added to cart!')
        if (redirectToCart === 'redirectToCart') {
            push('/cart')
        }
    }

    // return <Loading>Loading...</Loading>

    if (isFallback) {
        return (
            <Loading>
                <CircleNotch size={42} weight="bold" color="#637abf" />
            </Loading>
        )
    }

    return (
        <>
            <Head>
                <title>{product.name} | PHShop</title>
            </Head>

            <Wrapper>
                <ProductContainer>
                    <ImageContainer>
                        <Link href="/" title="Back to catalog">
                            <CaretLeft size={32} weight="bold" color="#637abf" />
                        </Link>
                        <Image
                            src={product.imageUrl}
                            width={380}
                            height={380}
                            alt={product.name}
                            quality={100}
                        />

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

                        <ContainerActions>
                            <button
                                disabled={false}
                                onClick={() => handleAddToCart()}
                                title="Add to cart"
                            >
                                {isTheCurrentProductInTheCart ? 'Product in Cart' : 'Add to Cart'}
                            </button>

                            <button
                                className="primary"
                                onClick={() => handleAddToCart('redirectToCart')}
                                title="Buy now"
                            >
                                Buy Now
                            </button>
                        </ContainerActions>

                        <p>
                            Details: Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Inventore tempore quas modi qui. Culpa, laboriosam quod provident dicta
                            cumque recusandae, inventore debitis unde repellat odio, itaque possimus
                            excepturi expedita dolore
                        </p>
                    </ProductDetails>
                </ProductContainer>
            </Wrapper>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    // buscar os produtos mais vendidos / mais acessados

    return {
        paths: [
            { params: { id: 'prod_NG86pgNulyIED4' } },
            { params: { id: 'prod_NG7PXPPp9zB7Jw' } },
        ],
        fallback: 'blocking',
    }
}

export const getStaticProps: GetStaticProps<any | undefined, { id: string }> = async ({
    params,
}) => {
    const productId = params?.id
    // (productId)

    if (productId) {
        const product = await stripe.products.retrieve(productId, {
            expand: ['default_price'],
        })

        const price = product.default_price as Stripe.Price

        const formattedPrice = price.unit_amount ? priceFormatter(price.unit_amount) : null
        const formattedOldPrice = price.unit_amount
            ? priceFormatter(Number(price.unit_amount) * 1.2)
            : null

        // if (price.unit_amount) {
        //     formattedPrice = priceFormatter(price.unit_amount)
        //     formattedOldPrice = formattedOldPrice = priceFormatter(Number(price.unit_amount) * 1.2)
        // }

        return {
            props: {
                product: {
                    id: product.id,
                    name: product.name,
                    imageUrl: product.images[0],
                    description: product.description,
                    defaultPriceId: price.id,

                    oldPrice: formattedOldPrice,
                    price: price.unit_amount,
                    formattedPrice,
                },
            },
            revalidate: 60 * 60 * 1, // 1 hour
        }
    }

    return {
        redirect: '/',
        props: {},
    }
}
