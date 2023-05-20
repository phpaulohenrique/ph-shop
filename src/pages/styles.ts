import { styled } from '../styles/styles'

export const Container = styled('div', {
    display: 'grid',
    gridTemplateColumns: '200px 1fr',
    gap: '2rem',

    '@bp1': {
        gridTemplateColumns: ' 1fr',
        justifyContent: 'center',
    },
})

export const ContainerProducts = styled('main', {
    display: 'flex',
    gap: '2rem',
    flexWrap: 'wrap',

    a: {
        textDecoration: 'none',
    },

    'span.product-not-found': {
        color: '$gray700',
    },

    '@bp1': {
        justifyContent: 'center',
    },
})
