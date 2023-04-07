import { ButtonBackToCatalog } from '@/components/ButtonBackToCatalog'
import { Wrapper } from '../../styles/global'
import { Container } from './styles'

export default function Page404() {
    return (
        <Wrapper>
            <Container>
                <h2>404</h2>
                <h3>Page not found!</h3>
                <ButtonBackToCatalog title="Back to Home" />
            </Container>
        </Wrapper>
    )
}
