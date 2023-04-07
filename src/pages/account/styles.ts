import { styled } from '../../styles/styles'

export const Container = styled('main', {
    display: 'grid',
    gridTemplateColumns: '8rem 1fr',

    h3: {
        color: '$blue500',
        fontSize: '$lg',
    },

    '> img': {
        borderRadius: 99999,
        overflow: 'hidden',
        // border: '1px solid blue',
    },

    '@bp1': {
        gridTemplateColumns: ' 1fr',
        '> img': {
            marginBottom: '1rem',
        },
    },
})

export const ContainerUserData = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '5rem',

    ul: {
        listStyle: 'none',
        marginTop: '1rem',
        borderRadius: 4,

        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    },

    '> div ul': {
        padding: '1rem 1.2rem',
        backgroundColor: '$gray150',
        boxShadow: '0px 0px 20px -10px rgba(0,0,0,0.35)',
        border: '1px solid $gray300',
    },
})

export const ContainerUserOrders = styled('section', {
    h4: {
        color: '$gray900',
        fontWeight: 500,
        display: 'inline-block',
    },
    time: {
        fontSize: '$xsm',
        color: '$gray500',
        display: 'inline-block',
        marginLeft: '4rem',
    },

    ul: {
        li: {
            borderRadius: 4,
            padding: '.6rem 1.2rem',
            border: '1px solid $gray300',
            backgroundColor: '$gray150',
            boxShadow: '0px 0px 20px -10px rgba(0,0,0,0.35)',
        },
    },

    'div.products': {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '4rem',
        rowGap: '2rem',

        // marginBlock: '1rem',
        padding: '1rem 1.2rem',

        span: {
            fontSize: '$xsm',
            color: '$blue500',
            display: 'block',
        },
    },
})
