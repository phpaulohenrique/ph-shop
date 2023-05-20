import { Wrapper } from '@/styles/global'
import { Container, ContainerUserData, ContainerUserOrders } from '@/pages/account/styles'
import { GetServerSideProps } from 'next'
import { getServerSession } from 'next-auth'
import { useSession } from 'next-auth/react'
import Image from 'next/image'

import { authOptions } from '../api/auth/[...nextauth].api'
import { prisma } from '@/lib/prisma'
import { dateFormatter } from '@/utils/dateFormatter'

interface IOrderProduct {
    id: string
    name: string
    price: string
    imageUrl: string
    amount: number
}

interface IUserAccountProps {
    userOrders: {
        id: string
        createdAt: string
        orderProducts: IOrderProduct[]
    }[]
}

export default function UserAccount({ userOrders }: IUserAccountProps) {
    const { data } = useSession()
    const user = data?.user ? data.user : null

    return (
        <Wrapper>
            <Container>
                {user?.image && <Image src={user?.image} alt="" width={100} height={100} />}

                <ContainerUserData>
                    <div>
                        <h3>Account</h3>
                        <ul>
                            <li>{user?.name}</li>
                            <li>{user?.email}</li>
                        </ul>
                    </div>

                    <ContainerUserOrders>
                        <h3>My Orders</h3>
                        <ul>
                            {userOrders?.map((order, index) => {
                                return (
                                    <li key={order.id}>
                                        <h4>Order {order.id}</h4>
                                        <time>Created {order.createdAt}</time>

                                        <div className="products">
                                            {order.orderProducts.map((product) => {
                                                return (
                                                    <div key={product.id}>
                                                        <Image
                                                            src={product.imageUrl}
                                                            width={60}
                                                            height={60}
                                                            alt={product.name}
                                                            quality={100}
                                                        />
                                                        <span>{product.name}</span>
                                                        <span>{product.amount} Un.</span>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </ContainerUserOrders>
                </ContainerUserData>
            </Container>
        </Wrapper>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const session = await getServerSession(ctx.req, ctx.res, authOptions)

    if (!session) {
        return {
            props: {},
            redirect: {
                destination: '/login',
                permanent: false,
            },
        }
    }

    const userOrders = await prisma.order.findMany({
        where: {
            user: session?.user,
        },
        include: {
            OrderProducts: {
                select: {
                    product: true,
                    amount: true,
                },
            },
        },
    })

    let orders = []

    if (userOrders.length) {
        const productsFormatted = userOrders.map((order) => {
            return {
                id: order.id,
                createdAt: dateFormatter(new Date(order.createdAt)),
                orderProducts: order.OrderProducts.map((product) => {
                    return {
                        id: product.product?.id,
                        name: product.product?.name,
                        price: product.product?.price,
                        imageUrl: product.product?.imgUrl,
                        amount: product.amount!,
                    }
                }),
            }
        })
        orders = JSON.parse(JSON.stringify(productsFormatted))
    }

    return {
        props: {
            userOrders: orders,
        },
    }
}
