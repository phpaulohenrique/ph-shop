import Image from "next/image"
import { BoxSearch, Container, ContainerWrapper, ContainerNav } from "./styles"
import Logo from "../../assets/logo.svg"
import { MagnifyingGlass, ShoppingCartSimple } from "phosphor-react"
import Link from "next/link"
import { useCart } from "@/contexts/cart"
import { UserPopover } from "../UserPopover"
import { FormEvent, useRef } from "react"
import { useRouter } from "next/router"
import { IsMobile } from "../IsMobile"
import { SideBarMenu } from "../SideBarMenu"

export function Header() {
    // const { data } = useSession()
    // const [isMenuOpen, setIsMenuOpen] = useState(false)
    const router = useRouter()

    const { cart } = useCart()
    const inputSearchRef = useRef<HTMLInputElement>(null)
    const mobile = IsMobile()
    // console.log(mobile)

    // useEffect(() => {
    //     // console.log(window.screen.width)
    //     router.push(`/`)
    //     // const a = router.query?.search
    //     // inputSearchRef.current.value! = "xxx"

    //     // console.log(router.query?.search)
    //     // console.log(inputSearchRef.current)
    //     // if (inputSearchRef.current) {
    //     //     inputSearchRef.current.value = router.query?.search ? String(router.query?.search) : ""
    //     // }
    //     //     console.log(router.query)
    //     // }
    // }, [router])

    const handleSearch = (event: FormEvent) => {
        event?.preventDefault()
        // console.log(inputSearchRef.current?.value)
        // alert(search)
        // searchProduct(inputSearchRef.current?.value)
        // router.push(`/?search=${inputSearchRef.current?.value}`)
        if (!inputSearchRef.current?.value) {
            router.push(`/`)
            return
        }
        router.push({
            pathname: "/",
            query: { search: inputSearchRef.current?.value },
        })
        // inputSearchRef = inputSearchRef
        // inputSearchRef.current.value! = "asdas"

        // if (inputSearchRef.current?.value) {
        //     inputSearchRef.current.value = "asdsadas"
        // }
    }
    // console.log(data)
    // console.log("render")

    return (
        <Container>
            <ContainerWrapper>
                <Link href="/">
                    <Image src={Logo} alt="" />
                </Link>

                <form onSubmit={handleSearch}>
                    <BoxSearch>
                        <input
                            type="text"
                            name="search"
                            id="search"
                            // value=""
                            ref={inputSearchRef}
                            // onChange={(event) => setSearch(event.target.value)}
                        />
                        <button title="search">
                            <MagnifyingGlass size={mobile ? 18 : 20} />
                        </button>
                    </BoxSearch>
                </form>

                <ContainerNav>
                    {mobile ? (
                        <SideBarMenu />
                    ) : (
                        <>
                            <UserPopover />
                            <li>
                                <Link href="/cart" title="Cart">
                                    <ShoppingCartSimple size={24} />
                                    {!!cart.length && <span>.</span>}
                                </Link>
                            </li>
                        </>
                    )}
                </ContainerNav>
            </ContainerWrapper>
            {/* {isMenuOpen &&
                createPortal(
                    <MenuRight data-menu-active={true}>
                        <UserPopover />
                        <li>
                            <Link href="/cart" title="Cart">
                                <ShoppingCartSimple size={24} />
                                {!!cart.length && <span>.</span>}
                            </Link>
                        </li>
                    </MenuRight>,
                    document.body
                )} */}
        </Container>
    )
}
