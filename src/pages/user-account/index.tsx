import { Wrapper } from "@/styles/global"
import { Container, ContainerUserData } from "@/styles/pages/user-account"
import { useSession } from "next-auth/react"
import Image from "next/image"
import { useRouter } from "next/router"

export default function UserAccount() {
    const { data } = useSession()
    const router = useRouter()

    if (data === null) {
        router.push("/login")
    }

    return (
        <Wrapper>
            <Container>
                <Image src={data?.user?.image} alt="" width={100} height={100} />

                <ContainerUserData>
                    <span>Hi, {data?.user?.name}</span>

                    <strong>Profile:</strong>

                    <span>Name: {data?.user?.name}</span>
                    <span>E-mail: {data?.user?.email}</span>
                </ContainerUserData>
            </Container>
        </Wrapper>
    )
}
