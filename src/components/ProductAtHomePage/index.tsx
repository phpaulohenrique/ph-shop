import Image from 'next/image'
import { Container, ProductInfo } from './styles'

interface IProductProps {
    product: {
        id: string
        name: string
        imageUrl: string
        price: string
    }
}

export function Product({ product }: IProductProps) {
    return (
        <Container>
            <Image
                src={product.imageUrl}
                width={160}
                height={160}
                alt={product.name}
                quality={100}
            />

            <ProductInfo>
                <strong>{product.name}</strong>
                <span>{product.price}</span>
            </ProductInfo>
        </Container>
    )
}
