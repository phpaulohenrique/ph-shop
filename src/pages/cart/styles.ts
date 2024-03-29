import { keyframes } from '@stitches/react'
import { styled } from '../../styles/styles'

export const Container = styled('div', {
    maxWidth: '900px',
    paddingBottom: '4rem',
    width: '100%',

    '> span': {
        marginBlock: '2rem 1rem',
    },

    h2: {
        color: '$blue500',
    },

    display: 'flex',
    flexDirection: 'column',

    '@bp1': {
        overflow: 'auto',
    },
})

export const CartTable = styled('table', {
    marginBlock: '2rem 1rem',
    width: '100%',
    maxWidth: '900px',
    textAlign: 'center',

    borderSpacing: '0 0.5rem',

    th: {
        lineHeight: '1.5rem',
        padding: '.5rem',
        // borderTopLeftRadius: "0.25rem",
    },

    'td:first-child': {
        borderTopLeftRadius: '.5rem',
        borderBottomLeftRadius: '.5rem',
    },

    'td:last-child': {
        borderTopRightRadius: '.5rem',
        borderBottomRightRadius: '.5rem',
    },

    td: {
        border: 0,
        backgroundColor: '$gray200',
        padding: '.6rem 1.2rem',
        height: '6rem',
    },

    'table, th, td': {},

    'tr td:first-child': {
        textAlign: 'left',
    },

    'th:nth-child(1)': {
        width: '40%',
    },

    '@bp1': {
        'th:nth-child(1)': {
            width: '50%',
        },
        td: {
            height: '10rem',
            paddingInline: '1rem',
            fontSize: '$xsm',
        },
    },
})

export const TdProduct = styled('td', {
    img: {
        borderRadius: 4,
    },

    span: {
        fontSize: '$sm',
        position: 'absolute',
        marginLeft: '1rem',
    },

    '@bp1': {
        span: {
            position: 'initial',
            margin: 0,
            fontSize: '$xsm',
        },
    },
})

export const TdAmount = styled('td', {
    display: 'flex',
    gap: '.6rem',
    justifyContent: 'center',
    alignItems: 'center',

    height: '6rem',

    '@bp1': {
        flexDirection: 'column',
        gap: '.4rem',
    },
})

export const Total = styled('th', {
    color: '$green500',
    fontSize: '$lg',
})

export const ButtonHandleAmount = styled('button', {
    // border: "0",

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: 'transparent',
    lineHeight: '0',
    height: '2rem',
    width: '2rem',
    // padding: "0rem 0.4rem ",
    borderRadius: 4,

    svg: {
        width: '1rem',
    },
    '&:hover': {
        cursor: 'pointer',
    },

    variants: {
        type: {
            add: {
                border: '1px solid green',
            },

            remove: {
                border: '1px solid #b52e24',
            },
        },
    },

    '@bp1': {
        height: '1.8rem',
        width: '1.8rem',
    },
})

const rotate = keyframes({
    '100%': { transform: 'rotate(360deg)' },
})

export const ButtonCheckout = styled('button', {
    backgroundColor: '$green500',
    border: 0,
    color: '$white',
    borderRadius: 6,
    padding: '.6rem',
    cursor: 'pointer',
    fontWeight: '500',
    fontSize: '$sm',
    width: '16rem',
    height: '2.6rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '.6rem',

    '@bp1': {
        width: '10rem',
    },

    '&.loading': {
        svg: {
            animation: `${rotate} 1s infinite`,
            width: '1.4rem',
        },
    },
})

export const ContainerActions = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
})
