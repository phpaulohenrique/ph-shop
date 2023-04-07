import Link from 'next/link'
import { Button } from './styles'
import { ShoppingBag } from 'phosphor-react'

interface ButtonBackToCatalogProps {
    title?: string
}

export function ButtonBackToCatalog({ title = 'Catalog' }: ButtonBackToCatalogProps) {
    return (
        <Link href="/" style={{ textDecoration: 'none' }}>
            <Button>
                {' '}
                <ShoppingBag size={20} weight="bold" />
                {title}
            </Button>
        </Link>
    )
}
