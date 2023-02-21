import React, { useState } from "react"
import * as Dialog from "@radix-ui/react-dialog"
import { Container, DialogClose, DialogContent, DialogDescription, DialogOverlay, DialogTitle } from "./styles"
import { List, ShoppingCartSimple, X } from "phosphor-react"
import Link from "next/link"
import { useCart } from "@/contexts/cart"

export const SideBarMenu = () => {
    const { cart } = useCart()
    const [open, setOpen] = useState(false)

    // const closeMenu = () => {}

    return (
        <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
                <List size={28} weight="light" color="#1a1a1a" />
            </Dialog.Trigger>
            <Dialog.Portal>
                <DialogOverlay />
                <DialogContent>
                    <DialogTitle>Menu</DialogTitle>
                    {/* <DialogDescription>Open menu</DialogDescription> */}
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
