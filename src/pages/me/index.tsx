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

    const productsBought = [
        {
            id: "prod_NG7PXPPp9zB7Jw",
            quantity: 5,
            price: 1500,
            description: "teste",
            name: "S22+",
            imgUrl: "https://files.stripe.com/links/MDB8YWNjdF8xTVZhNmVEZjNxQ1ZBcDZ5fGZsX3Rlc3RfcXFOTWxmNUVMdzUzZ1BlUDJKUGh3a2pJ00c9oz4DKq",
        },
        {
            id: "fake",
            quantity: 2,
            price: 3000,
            description: "teste",
            name: "IPhone X",
            imgUrl: "",
        },
        {
            id: "prod_NG7MLt73bY89WN",
            quantity: 1,
            price: 5000,
            description: "",
            name: "S22 Ultra",
            imgUrl: "https://files.stripe.com/links/MDB8YWNjdF8xTVZhNmVEZjNxQ1ZBcDZ5fGZsX3Rlc3RfdzdRaTRPMXVaa3hTMW42ME9Jekc4U0pp00Y8xtiCel",
        },
        {
            id: "faker2",
            quantity: 10,
            price: 1700,
            description: "",
            name: "IPhone 7",
            imgUrl: "",
        },
    ]

    const productsBoughtId = productsBought.map((product) => product.id)
    console.log(productsBoughtId)

    const userId = "clek0lt6y0002450g8lbjssz1"

    const dataToCheckout = {
        productsBought,
        userId: "clek0lt6y0002450g8lbjssz1",
    }

    const productsAlreadyRegistered = await prisma.product.findMany({
        where: {
            id: { in: productsBoughtId },
        },
    })
    const productsIdThatAreRegistered = productsAlreadyRegistered.map((product) => product.id)
    // console.log("xxxxxxxxxxx")
    // console.log(productsAlreadyRegistered)
    // console.log("---------------")

    // const intersections = productsId.filter((a) => productsRegistered.map((e) => a.indexOf()))

    // const productsThatAreNotRegistered = productsId.filter((element) =>
    //     productsRegistered.map((e) => e.indexOf(element) !== -1)
    // )

    const productsIdThatAreNotRegistered = productsBoughtId.filter(function (obj) {
        return productsIdThatAreRegistered.indexOf(obj) === -1
    })

    // console.log(productsIdThatAreNotRegistered)

    const productsToBeRegistered = productsBought.filter(
        (product) => productsIdThatAreNotRegistered.indexOf(product.id) !== -1
    )

    const productsAlreadyRegisteredToBeAddedToOrder = productsBought.filter(
        (product) => productsIdThatAreRegistered.indexOf(product.id) !== -1
    )
    // const productsThatAreNotRegistered = productsId.map((element) => productsRegistered.filter((p) => p.id !== element))

    console.log("eita")
    console.log(productsAlreadyRegisteredToBeAddedToOrder)
    // console.log(productsToBeRegistered)
    // console.log(intersections)

    // const newProductsRegistered = await prisma.product.create({
    //     data: {
    //         productsToBeRegistered,
    //     },
    // })

    if (productsToBeRegistered.length) {
        const newProductsRegistered = await prisma.$transaction(
            productsToBeRegistered.map((product) =>
                prisma.product.create({
                    data: {
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        description: product.description,
                        imgUrl: product.imgUrl,
                        OrderProducts: {
                            create: {
                                amount: product.quantity,
                            },
                        },
                    },
                })
            )
        )
    }

    if (productsAlreadyRegisteredToBeAddedToOrder.length) {
        await prisma.$transaction(
            productsAlreadyRegisteredToBeAddedToOrder.map((product) =>
                prisma.orderProducts.create({
                    data: {
                        amount: product.quantity,
                        productId: product.id,
                    },
                })
            )
        )
    }


    const orderProducts = await prisma.orderProducts.findMany({
        where: {
            productId: { in: productsBoughtId },
            orderId: null,
            // order: {},
        },
    })

    const orderProductsId = orderProducts.map((orderProduct) => {
        return { id: orderProduct.id }
    })

    console.log(orderProductsId)

    const orderCreated = await prisma.order.create({
        data: {
            userId: "clekdduxs0000458gcczwb7s8",
            OrderProducts: {
                connect: orderProductsId,
            },
        },
        include: {
            OrderProducts: true,
        },
    })

    console.log(orderCreated)

    // const orderCreated = await prisma.$transaction(
    //     prisma.order.create({
    //         data: {
    //             userId,
    //             OrderProducts: {
    //                 connect: orderProducts.map((e) => e.id),
    //             },
    //         },
    //     })
    // )

    return {
        props: {
            // session

            orders,
        },
    }
}
