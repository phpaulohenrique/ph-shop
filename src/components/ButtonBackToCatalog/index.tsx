import Link from "next/link"
import { Button } from "./styles"

export function ButtonBackToCatalog() {
    return (
        <Link href="/">
            <Button>Catalog</Button>
        </Link>
    )
}
