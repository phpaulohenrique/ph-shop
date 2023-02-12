import * as Popover from "@radix-ui/react-popover"
import { PopoverTrigger, PopoverContent, PopoverArrow, PopoverClose, Container } from "./styles"
import { SignOut, User, UserCircle, X } from "phosphor-react"
import { useCart } from "@/contexts/cart"
import { signOut, useSession } from "next-auth/react"
import Link from "next/link"

export function UserPopover() {
    const { data, status } = useSession()

    return (
        <Popover.Root>
            <PopoverTrigger>
                <li>
                    <User size={24} />
                </li>
            </PopoverTrigger>
            <Popover.Portal>
                <PopoverContent>
                    {/* <PopoverClose><X size={18} /></PopoverClose> */}
                    <Container>
                        {status === "unauthenticated" ? (
                            <>
                                <span>You aren't signed in</span>
                                <Link href="/login">
                                    <button type="button">
                                        <UserCircle />
                                        Sign in
                                    </button>
                                </Link>
                            </>
                        ) : (
                            <>
                                <span>Hi, {data?.user?.name}</span>
                                <Link href="/user-account">
                                    <button type="button">
                                        <UserCircle />
                                        My account
                                    </button>
                                </Link>
                                <button type="button" onClick={() => signOut()}>
                                    <SignOut />
                                    Sign out
                                </button>
                            </>
                        )}
                    </Container>
                    <Popover.Arrow height={8} width={16} fill="#c4c4cc" />
                </PopoverContent>
            </Popover.Portal>
        </Popover.Root>
    )
}
