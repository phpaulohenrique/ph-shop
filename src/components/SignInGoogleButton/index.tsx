import { getSession, signIn, useSession } from "next-auth/react"
import { useRouter } from "next/router"

import { api } from "../../lib/axios"
import { ButtonLoginGoogle } from "./styles"
import { GoogleLogo } from "phosphor-react"
import { toast } from "react-toastify"

// interface ISubscribeButtonProps{
//     priceId: string;
// }

export function SignInGoogleButton() {
    const { data: session } = useSession()
    const router = useRouter()
    console.log("oi")

    async function handleSignIn() {
        if (!session) {
            signIn("google", { redirect: false, callbackUrl: "/" })
            // console.log("eit")
            toast.success("Login success!")

            // await router.push("/user-account")
            // useRouter().push("/user-account")

            return
        }

        try {
            const response = await api.post("/users", {
                name: session.user?.name,
                email: session.user?.email,
            })
            console.log("eit")

            // await router.push("/user-account")
        } catch (err) {
            alert(err)
        }
    }

    return (
        <ButtonLoginGoogle type="button" onClick={handleSignIn}>
            <GoogleLogo size={24} fill="bold" />
            Continue with google
        </ButtonLoginGoogle>
    )
}
