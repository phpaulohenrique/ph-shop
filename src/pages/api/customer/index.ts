// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import { prisma } from "../../../lib/prisma"
import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).end()
    }

    // const { name, email } = req.body

    // const customerExists = await prisma.customer.findUnique({
    //     where: {
    //         email,
    //     },
    // })
    // if (customerExists) {
    //     return res.status(200).json(customerExists)
    // }

    // const customer = await prisma.customer.create({
    //     data: {
    //         name,
    //         email,
    //     },
    // })

    // return res.status(201).json(customer)
}
