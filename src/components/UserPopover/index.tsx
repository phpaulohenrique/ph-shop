import * as Popover from "@radix-ui/react-popover"
import { PopoverTrigger, PopoverContent, Container } from "./styles"
import { SignOut, User, UserCircle } from "phosphor-react"
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
                                <span>You are not signed in</span>
                                <Link href="/login">
                                    <button type="button">
                                        <UserCircle weight="light" />
                                        Sign in
                                    </button>
                                </Link>
                            </>
                        ) : (
                            <>
                                <span> Hey, {data?.user?.name}</span>
                                <Link href="/me">
                                    <button type="button">
                                        <UserCircle weight="light" />
                                        My account
                                    </button>
                                </Link>
                                <button type="button" onClick={() => signOut()}>
                                    <SignOut weight="light" />
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
