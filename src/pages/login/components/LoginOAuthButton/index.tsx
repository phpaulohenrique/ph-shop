import { signIn, useSession } from 'next-auth/react'

import { ButtonLogin } from './styles'
import { ReactNode } from 'react'

interface ILoginOAuthButton {
    provider: 'google'
    icon: ReactNode
}

export function LoginOAuthButton({ provider, icon }: ILoginOAuthButton) {
    const { data } = useSession()

    async function handleLogin() {
        if (!data?.user) {
            await signIn(provider, { redirect: false, callbackUrl: '/' })
        }
    }

    return (
        <ButtonLogin type="button" onClick={handleLogin}>
            {icon}
            {provider}
        </ButtonLogin>
    )
}
