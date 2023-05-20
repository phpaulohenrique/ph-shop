import { keyframes } from '@stitches/react'
import { styled } from '../../styles/styles'

export const ProductContainer = styled('main', {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1rem',

    '@bp1': {
        gridTemplateColumns: '1fr',
    },
})

export const ImageContainer = styled('div', {
    width: '100%',

    borderRadius: 8,

    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: '1.4rem',

    img: {
        objectFit: 'cover',
        borderRadius: 8,
    },

    '@bp1': {
        flexDirection: 'column',

        img: {
            alignSelf: 'center',
            width: '16rem',
            height: '16rem',
        },
    },
})

export const ImagesCarousel = styled('div', {
    width: '100%',
    // border: "1px solid blue",
    marginTop: '1rem',
    display: 'flex',
    gap: '1rem',
})
export const ProductDetails = styled('div', {
    display: 'flex',
    flexDirection: 'column',

    h1: {
        fontSize: '$2xl',
        color: '$gray700',
        fontWeight: '400',
    },

    span: {
        marginTop: '.2rem',
        display: 'block',
        fontSize: '$2xl',
        color: '$green500',
        fontWeight: 'bold',
    },

    p: {
        marginTop: '2.5rem',
        color: '$gray700',
        fontSize: '$sm',
        lineHeight: 1.6,
    },
})

export const ContainerPrice = styled('div', {
    // display: 'flex',
    // alignItems: 'center',

    p: {
        marginTop: '1rem',
        display: 'block',
        fontSize: '$sm',
        color: '$gray500',
        fontWeight: '400',
        textDecoration: 'line-through',
    },

    span: {
        marginTop: '.4rem',
        display: 'block',
        fontSize: '$2xl',
        color: '$green500',
        fontWeight: 'bold',
    },
})

const rotate = keyframes({
    '100%': { transform: 'rotate(360deg)' },
})
export const Loading = styled('div', {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%)',

    svg: {
        animation: `${rotate} 800ms infinite`,
    },
})

export const ContainerActions = styled('div', {
    display: 'flex',
    gap: '1rem',
    marginTop: '1.4rem',

    button: {
        color: '$blue300',
        height: '2.6rem',
        background: 'transparent',
        border: '1px solid $blue500',

        borderRadius: 6,
        padding: '.8rem',
        cursor: 'pointer',
        fontWeight: '500',
        fontSize: '$sm',
        width: '9rem',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        '&.primary': {
            backgroundColor: '$blue300',

            color: '$white',
            border: 0,
            borderRadius: 6,
            padding: '.6rem',
            cursor: 'pointer',
            fontWeight: '500',
            fontSize: '$sm',
            // width: "10rem",
            // marginLeft: "auto",
            textDecoration: 'none',
            gap: '0.6rem',
            height: '2.6rem',
            width: '7rem',
        },
    },
})
