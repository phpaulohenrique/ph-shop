import { Input } from "@/components/Input"
import * as yup from "yup"
import { Wrapper } from "@/styles/global"
import { Container, ContainerLogin } from "@/styles/pages/login"
import { SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { useSession } from "next-auth/react"
import { SignInGoogleButton } from "@/components/SignInGoogleButton"

import { authOptions } from "../api/auth/[...nextauth]"
import { getServerSession } from "next-auth/next"

type SignInFormData = {
    email: string
    password: string
}

const signInFormSchema = yup.object().shape({
    email: yup.string().required("Email required").email(),
    password: yup.string().required("Password required"),
})

export default function Login() {
    const { data } = useSession()

    const { register, handleSubmit, formState } = useForm<SignInFormData>({
        resolver: yupResolver(signInFormSchema),
    })

    const { errors } = formState

    const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
        await new Promise((resolve) => setTimeout(resolve, 2000))
        console.log(values)
    }

    // const handleSignInWithASocialAccount = async (provider: BuiltInProviderType) => {
    //     await signIn(provider)

    //     console.log(data)
    //     console.log("oi")

    //     try {
    //         await api.post("/users", {
    //             name: data?.user?.name,
    //             email: data?.user?.email,
    //         })
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }

    return (
        <Wrapper>
            <Container>
                <h1>Login</h1>

                <ContainerLogin>
                    <form onSubmit={handleSubmit(handleSignIn)}>
                        <Input label="E-mail" error={errors.email} type="email" {...register("email")} />
                        <Input label="Password" error={errors.password} type="password" {...register("password")} />

                        <button type="submit">Sign In</button>
                    </form>

                    <span>or</span>
                    <SignInGoogleButton />
                </ContainerLogin>
            </Container>
        </Wrapper>
    )
}

// export async function getServerSideProps(context: any) {
//     const session = await getServerSession(context.req, context.res, authOptions)

//     if (session) {
//         return {
//             redirect: {
//                 destination: "/user-account",
//                 permanent: false,
//             },
//         }
//     }

//     return {
//         props: {
//             session,
//         },
//     }
// }
