import { Wrapper } from "@/styles/global"
import { Container, ContainerUserData, ContainerUserOrders } from "@/styles/pages/me"
import { GetServerSideProps } from "next"
import { getServerSession } from "next-auth"
import { useSession } from "next-auth/react"
import Image from "next/image"
import { useRouter } from "next/router"
import { authOptions } from "../api/auth/[...nextauth]"
import { prisma } from "@/lib/prisma"
// import { api } from "@/lib/axios"

interface IOrderProduct {
    id: string
    name: string
    price: string
    imageUrl: string
    amount: number
}

interface IUserAccountProps {
    orders: {
        id: string
        createdAt: string
        orderProducts: IOrderProduct[]
    }[]
}

export default function UserAccount({ orders }: IUserAccountProps) {
    console.log(orders)
    const { data } = useSession()
    const router = useRouter()

    if (data === null) {
        router.push("/login")
    }

    return (
        <Wrapper>
            <Container>
                {data?.user?.image && <Image src={data?.user?.image} alt="" width={100} height={100} />}

                <ContainerUserData>
                    {/* <span>Hi, {data?.user?.name}</span> */}

                    <strong>Account</strong>

                    <span>Name: {data?.user?.name}</span>
                    <span>E-mail: {data?.user?.email}</span>
                    <ContainerUserOrders>
                        <h3>My Orders</h3>
                        <ul>
                            {orders.map((order, index) => {
                                return (
                                    <li key={order.id}>
                                        <h4>Order {index + 1}</h4>
                                        <time>{order.createdAt}</time>
                                        <div className="products">
                                            {order.orderProducts.map((product) => {
                                                return (
                                                    <div key={product.id}>
                                                        <Image
                                                            src={product.imageUrl}
                                                            width={110}
                                                            height={110}
                                                            alt={product.name}
                                                            quality={100}
                                                        />
                                                        <span>{product.name}</span>
                                                        <span>Quantity: {product.amount}</span>
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
    // console.log(session)

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

    const productFormatted = userOrders.map((order) => {
        return {
            id: order.id,
            createdAt: new Date(order.createdAt).toLocaleDateString(),
            orderProducts: order.OrderProducts.map((product) => {
                return {
                    id: product.product.id,
                    name: product.product.name,
                    price: product.product.price,
                    imageUrl: product.product.imgUrl,
                    amount: product.amount,
                }
            }),
        }
    })

    // console.log(productFormatted)
    const orders = JSON.parse(JSON.stringify(productFormatted))

    // const a = JSON.parse(orders)

    // if (session?.user) {
    //     try {
    //         const response = await api.post("/users", {
    //             email: session.user?.email,
    //         })
    //         // alert(response)
    //         // console.log(response)
    //         // await router.push("/")
    //     } catch (err) {
    //         // alert(err)
    //         // console.log(err)
    //     }
    // }

    // if (session) {
    //     return {
    //         redirect: {
    //             destination: "/user-account",
    //             permanent: false,
    //         },
    //     }
    // }

    // -----

    return {
        props: {
            // session

            orders,
        },
    }
}
