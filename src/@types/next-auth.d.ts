/* eslint-disable  */
import NextAuth from "next-auth"

declare module "next-auth" {
    export interface User {
        id: string
        name: string
        email: string

    }

    interface Session {
        user: User
    }
}
