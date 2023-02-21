import { Wrapper } from "@/styles/global"
import { Container, ContainerUserData } from "@/styles/pages/me"
import { GetServerSideProps } from "next"
import { getServerSession } from "next-auth"
import { useSession } from "next-auth/react"
import Image from "next/image"
import { useRouter } from "next/router"
import { authOptions } from "../api/auth/[...nextauth]"
import { api } from "@/lib/axios"

export default function UserAccount() {
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
                </ContainerUserData>
            </Container>
        </Wrapper>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const session = await getServerSession(ctx.req, ctx.res, authOptions)
    // console.log(session)

    if (session?.user) {
        try {
            const response = await api.post("/users", {
                email: session.user?.email,
            })
            // alert(response)
            // console.log(response)
            // await router.push("/")
        } catch (err) {
            // alert(err)
            // console.log(err)
        }
    }

    // if (session) {
    //     return {
    //         redirect: {
    //             destination: "/user-account",
    //             permanent: false,
    //         },
    //     }
    // }

    return {
        props: {
            // session,
        },
    }
}
