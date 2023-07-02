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
                            type="search"
                            name="search"
                            aria-label="Search for products by name"
                            id="search"
                            placeholder="Search"
                            ref={inputSearchRef}
                        />
                        <button title="search" type="submit">
                            <MagnifyingGlass size={isMobile ? 18 : 20} weight="bold" />
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
