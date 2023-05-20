import React, { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { Container, DialogClose, DialogContent, DialogOverlay, DialogTitle } from './styles'
import { List, ShoppingCartSimple, SignOut, UserCircle, X } from 'phosphor-react'
import Link from 'next/link'
import { useCart } from '@/contexts/cart'
import { signOut, useSession } from 'next-auth/react'

export const SideBarMenu = () => {
    const { cart } = useCart()
    const [open, setOpen] = useState(false)

    const session = useSession()
    const unauthenticated = session.status !== 'authenticated'

    return (
        <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
                <List size={28} weight="light" color="#1a1a1a" />
            </Dialog.Trigger>
            <Dialog.Portal>
                <DialogOverlay />
                <DialogContent>
                    <DialogTitle>Menu</DialogTitle>
                    <Container>
                        <ul>
                            <li>
                                <button onClick={() => setOpen(false)}>
                                    <Link href="/cart" title="Cart">
                                        <ShoppingCartSimple size={24} />
                                        Cart
                                        {/* {!!cart.length && <span>.</span>} */}
                                    </Link>
                                </button>
                                <span>{!!cart.length && <span>{cart.length} products</span>}</span>
                            </li>

                            <li>
                                <button onClick={() => setOpen(false)}>
                                    <Link href={unauthenticated ? '/login' : '/account'}>
                                        <UserCircle size={24} />
                                        {unauthenticated ? 'Login' : 'My Account'}
                                    </Link>
                                </button>
                            </li>
                            <li>
                                {!unauthenticated && (
                                    <button onClick={() => signOut()}>
                                        <Link href="/cart">
                                            <SignOut size={24} />
                                            Logout
                                        </Link>
                                    </button>
                                )}
                            </li>
                        </ul>
                    </Container>

                    <DialogClose asChild>
                        <button aria-label="Close">
                            <X size={24} />
                        </button>
                    </DialogClose>
                </DialogContent>
            </Dialog.Portal>
        </Dialog.Root>
    )
}
