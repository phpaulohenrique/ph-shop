import { useEffect, useState } from "react"

export function IsMobile() {
    const [mobile, setMobile] = useState(false)
    useEffect(() => {
        setMobile(window.screen.width < 768)
    }, [])
    // if (typeof window !== "undefined") {
    //     // detect window screen width function
    // }

    return mobile
}
