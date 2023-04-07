import { useEffect, useState } from 'react'

export function IsMobile() {
    const [mobile, setMobile] = useState(false)
    useEffect(() => {
        setMobile(window.screen.width < 768)
    }, [])

    return mobile
}
