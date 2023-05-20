import { styled } from '@/styles/styles'
import { keyframes } from '@stitches/react'

export const Container = styled('div', {
    paddingBlock: '.8rem',
    boxShadow: '0px 0px 20px -10px rgba(0,0,0,0.75)',
    top: 0,
    width: '100%',
    background: '#f2f3f5',

    paddingInline: '1rem',
    position: 'fixed',
})

export const ContainerWrapper = styled('nav', {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    '@bp1': {
        img: {
            width: '4rem',
        },
    },
})

export const BoxSearch = styled('label', {
    display: 'flex',
    alignItems: 'center',
    width: '24rem',
    borderRadius: 4,
    overflow: 'hidden',

    input: {
        flex: 1,
        border: 'none',
        padding: '.2rem .6rem',
        outline: 'none',
        fontSize: '$sm',
        height: '1.8rem',

        '&::placeholder': {
            fontSize: '$xsm',
        },
    },

    'button[type="submit"]': {
        width: '4rem',
        border: 'none',
        height: '1.8rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        svg: {
            color: '$gray800',
        },
    },

    '@bp1': {
        width: '14rem',
        input: {
            width: '12rem',
        },
        button: {
            width: '2rem',
        },
    },
})

export const ContainerNav = styled('ul', {
    display: 'flex',
    alignItems: 'center',
    gap: '.6rem',
    border: 0,

    svg: {
        color: '#008490',
    },

    'button:hover': {
        filter: 'none',
        background: '$gray300',
        // lineHeight: "0",
        // fontSize: "0",
        // padding: ".2rem",
    },

    li: {
        listStyle: 'none',
        border: 0,
        // background: "blue",
        // borderRadius: 4,
        padding: '.2rem',
    },

    'li:hover': {
        filter: 'initial !important',
        cursor: 'pointer',
        background: '$gray300',
        // transition: "filter 0.2s",
    },

    'li a:nth-child(1)': {
        position: 'relative',

        span: {
            background: '#E52626',
            width: '7px',
            height: '7px',
            // fontSize: "1rem",
            top: '-5px',
            left: '18px',
            borderRadius: '50%',
            position: 'absolute',
            color: 'transparent',
        },
    },
})

const scaleUp = keyframes({
    '0%': { transform: 'translateX(100%)' },
    '50%': { transform: 'translateX(50%)' },
    '100%': { transform: 'translateX(0%)' },
})

export const MenuRight = styled('div', {
    background: 'blue',
    width: '60vw',
    height: '100%',
    position: 'fixed',
    zIndex: 1,
    right: 0,
    top: 0,
    overflowX: 'hidden',
    transform: 'translateX(100%)',

    '&[data-menu-active=true]': {
        transform: 'translateX(0%)',
        // transition: "all 1000ms",
        transition: `${scaleUp} 3000ms`,
        // animationDuration: "1000ms",
    },
})
