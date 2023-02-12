import Link from "next/link"
import { Button } from "./styles"

export function ButtonBackToCatalog() {
    return (
        <Link href="/">
            <Button>Back to Catalog</Button>
        </Link>
    )
}
