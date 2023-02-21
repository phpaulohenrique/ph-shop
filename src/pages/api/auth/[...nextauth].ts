import { api } from "@/lib/axios"
import { prisma } from "../../../lib/prisma"
import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
        }),
    ],
    callbacks: {
        async signIn({ account, user }) {
            // const customer = await prisma.customer.create({
            //     data: {
            //         name: user.name,
            //         email: user.email,
            //     },
            // })

            return true
        },

        async session({ session, user }) {
            const customer = "asdas"
            // customer = await prisma.customer.findUnique({
            //     where: {
            //         email: session?.user?.email ?? undefined,
            //     },
            // })

            // if (!customer && user.name && user.email) {
            //     customer = await prisma.customer.create({
            //         data: {
            //             name: user.name,
            //             email: user.email,
            //         },
            //     })
            // }
            return {
                ...session,
                customer,
            }
        },
    },
}
export default NextAuth(authOptions)
