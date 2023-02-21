import Link from "next/link"
import { Button } from "./styles"
import { ShoppingBag } from "phosphor-react"

export function ButtonBackToCatalog() {
    return (
        <Link href="/" style={{ textDecoration: "none" }}>
            <Button>
                {" "}
                <ShoppingBag size={20} weight="bold" />
                Catalog
            </Button>
        </Link>
    )
}
