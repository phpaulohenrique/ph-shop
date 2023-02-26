import { prisma } from "@/lib/prisma"
import { stripe } from "@/lib/stripe"
import { NextApiRequest, NextApiResponse } from "next"
import { save } from "../../../services/prisma-save-order-bd"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // console.log(req.body)
    const { products, userId } = req.body

    console.log(products)

    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" })
    }

    if (!products.length || !userId) {
        return res.status(400).json({ error: "Products or userId not found!." })
    }

    const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
    const cancelUrl = `${process.env.NEXT_URL}/`

    const checkoutSession = await stripe.checkout.sessions.create({
        success_url: successUrl,
        cancel_url: cancelUrl,
        mode: "payment",
        line_items: products,
    })

    // await save()

    return res.status(201).json({
        checkoutUrl: checkoutSession.url,
    })
}
