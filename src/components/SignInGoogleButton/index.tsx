import { getSession, signIn, useSession } from "next-auth/react"
import { useRouter } from "next/router"

import { api } from "../../lib/axios"
import { ButtonLoginGoogle } from "./styles"
import { GoogleLogo } from "phosphor-react"
import { toast } from "react-toastify"
import { useEffect } from "react"

// interface ISubscribeButtonProps{
//     priceId: string;
// }

export function SignInGoogleButton() {
    // console.log(data)
    const router = useRouter()
    const { data } = useSession()

    // useEffect(() => {
    //     loginbackend()
    // }, [data?.user])

    // async function loginbackend() {
    //     try {
    //         if (data?.user) {
    //             const response = await api.post("/users", {
    //                 name: data?.user?.name,
    //                 email: data?.user?.email,
    //             })
    //             // alert(response)
    //             console.log(response)

    //             // await router.push("/")
    //         }
    //     } catch (err) {
    //         // alert(err)
    //         console.log(data)
    //     }
    // }

    async function handleSignIn() {
        if (!data?.user) {
            await signIn("google", { redirect: false, callbackUrl: "/" })
            // const response = await signIn("google")
            // loginbackend()

            // toast.success("Login success!")

            // alert(response)

            // try {
            //     if (data?.user) {
            //         const response = await api.post("/users", {
            //             name: data?.user?.name,
            //             email: data?.user?.email,
            //         })
            //         alert(response)
            //         await router.push("/")
            //     }
            // } catch (err) {
            //     // alert(err)
            //     console.log(data)
            // }
            // console.log(response)
        }

        // try {
        //     if (data?.user) {
        //         const response = await api.post("/users", {
        //             name: data?.user?.name,
        //             email: data?.user?.email,
        //         })
        //         alert(response)
        //         await router.push("/")
        //     }
        // } catch (err) {
        //     // alert(err)
        //     console.log(data)
        // }
    }

    return (
        <ButtonLoginGoogle type="button" onClick={handleSignIn}>
            <GoogleLogo size={24} fill="bold" />
            Continue with google
        </ButtonLoginGoogle>
    )
}
