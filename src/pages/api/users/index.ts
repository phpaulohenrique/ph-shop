// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from "../../../lib/prisma"
import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).end()
    }

    const { name, email } = req.body

    const userExists = await prisma.user.findUnique({
        where: {
            email,
        },
    })
    if (userExists) {
        return res.status(200).json(userExists)
    }

    const user = await prisma.user.create({
        data: {
            name,
            email,
        },
    })

    return res.status(201).json(user)
}
