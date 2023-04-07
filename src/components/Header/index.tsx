import Image from 'next/image'
import { BoxSearch, Container, ContainerWrapper, ContainerNav } from './styles'
import Logo from '../../assets/logo.svg'
import { MagnifyingGlass, ShoppingCartSimple } from 'phosphor-react'
import Link from 'next/link'
import { useCart } from '@/contexts/cart'
import { UserPopover } from '../UserPopover'
import { FormEvent, useRef } from 'react'
import { useRouter } from 'next/router'
import { IsMobile } from '../IsMobile'
import { SideBarMenu } from '../SideBarMenu'

export function Header() {
    // const { data } = useSession()
    // const [isMenuOpen, setIsMenuOpen] = useState(false)
    const router = useRouter()

    const { cart } = useCart()
    const inputSearchRef = useRef<HTMLInputElement>(null)
    const isMobile = IsMobile()

    const handleSearch = (event: FormEvent) => {
        event?.preventDefault()

        if (!inputSearchRef.current?.value) {
            router.push(`/`)
            return
        }
        router.push({
            pathname: '/',
            query: { search: inputSearchRef.current?.value },
        })
    }

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
                            <MagnifyingGlass size={isMobile ? 18 : 20} />
                        </button>
                    </BoxSearch>
                </form>

                <ContainerNav>
                    {isMobile ? (
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
        </Container>
    )
}
