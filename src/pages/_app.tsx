import type { AppProps } from "next/app"
import { globalStyles } from "../styles/global"
import { Header } from "@/components/Header"
import { CartProvider } from "@/contexts/cart"
import { SessionProvider } from "next-auth/react"
import { ToastContainer } from "react-toastify"

import "react-toastify/dist/ReactToastify.css"

globalStyles()

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    return (
        <SessionProvider session={session}>
            <ToastContainer
                position="bottom-right"
                autoClose={2000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <CartProvider>
                <Header />
                <Component {...pageProps} />
            </CartProvider>
        </SessionProvider>
    )
}
