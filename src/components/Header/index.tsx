import Image from "next/image"
import { BoxSearch, Container, ContainerWrapper, ContainerNav } from "./styles"
import Logo from "../../assets/logo.svg"
import { Heart, MagnifyingGlass, ShoppingCartSimple, User } from "phosphor-react"
import Link from "next/link"
import { useSession } from "next-auth/react"
import { useCart } from "@/contexts/cart"
import { UserPopover } from "../UserPopover"
export function Header() {
    const { data } = useSession()

    const { cart } = useCart()

    console.log(data)

    return (
        <Container>
            <ContainerWrapper>
                <Link href="/">
                    <Image src={Logo} alt="" />
                </Link>

                <BoxSearch>
                    <input type="text" name="search" />
                    <button title="search">
                        <MagnifyingGlass size={20} />
                    </button>
                </BoxSearch>

                <ContainerNav>
                    <UserPopover />

                    <li>
                        {/* <span>{data?.user && data.user.name}</span> */}
                        {/* <Link href="/login">
                            <User size={24} />
                        </Link> */}
                    </li>
                    {/* <li>
                        <Heart size={24} />
                    </li> */}
                    <li>
                        <Link href="/cart" title="Cart">
                            <ShoppingCartSimple size={24} />
                            {!!cart.length && <span>.</span>}
                        </Link>
                    </li>
                </ContainerNav>
            </ContainerWrapper>
        </Container>
    )
}
