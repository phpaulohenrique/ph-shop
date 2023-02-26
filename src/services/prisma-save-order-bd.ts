import { prisma } from "@/lib/prisma"

interface IProductBought {
    id: string
    name: string
    price: number
    quantity: number
    description?: string | null
    imgUrl?: string | null
}

interface ISaveOrderBdProps {
    productsBought: IProductBought[]
    userId: string
}

export async function prismaSaveOrderBd({ productsBought, userId }: ISaveOrderBdProps) {
    // const productsBought = [
    //     {
    //         id: "prod_NG7PXPPp9zB7Jw",
    //         quantity: 5,
    //         price: 1500,
    //         description: "teste",
    //         name: "S22+",
    //         imgUrl: "https://files.stripe.com/links/MDB8YWNjdF8xTVZhNmVEZjNxQ1ZBcDZ5fGZsX3Rlc3RfcXFOTWxmNUVMdzUzZ1BlUDJKUGh3a2pJ00c9oz4DKq",
    //     },
    //     {
    //         id: "fake",
    //         quantity: 2,
    //         price: 3000,
    //         description: "teste",
    //         name: "IPhone X",
    //         imgUrl: "",
    //     },
    //     {
    //         id: "prod_NG7MLt73bY89WN",
    //         quantity: 1,
    //         price: 5000,
    //         description: "",
    //         name: "S22 Ultra",
    //         imgUrl: "https://files.stripe.com/links/MDB8YWNjdF8xTVZhNmVEZjNxQ1ZBcDZ5fGZsX3Rlc3RfdzdRaTRPMXVaa3hTMW42ME9Jekc4U0pp00Y8xtiCel",
    //     },
    //     {
    //         id: "faker2",
    //         quantity: 10,
    //         price: 1700,
    //         description: "",
    //         name: "IPhone 7",
    //         imgUrl: "",
    //     },
    // ]

    const productsBoughtId = productsBought.map((product) => product.id)
    console.log(productsBoughtId)

    const productsAlreadyRegistered = await prisma.product.findMany({
        where: {
            id: { in: productsBoughtId },
        },
    })
    const productsIdThatAreRegistered = productsAlreadyRegistered.map((product) => product.id)

    const productsIdThatAreNotRegistered = productsBoughtId.filter(function (obj) {
        return productsIdThatAreRegistered.indexOf(obj) === -1
    })

    const productsToBeRegistered = productsBought.filter(
        (product) => productsIdThatAreNotRegistered.indexOf(product.id) !== -1
    )

    const productsAlreadyRegisteredToBeAddedToOrder = productsBought.filter(
        (product) => productsIdThatAreRegistered.indexOf(product.id) !== -1
    )

    if (productsToBeRegistered.length) {
        await prisma.$transaction(
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

    const orderCreated = await prisma.order.create({
        data: {
            userId,
            OrderProducts: {
                connect: orderProductsId,
            },
        },
        include: {
            OrderProducts: true,
        },
    })

    return orderCreated
}
