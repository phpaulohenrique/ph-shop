import { styled } from '@/styles/styles'

export const Container = styled('div', {
    // background: "red",
    padding: '1rem 1rem',
    // width: "10rem",
    borderRadius: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    // border: "1px solid blue",
    // border: "1px solid blue",
    color: '$gray800',

    img: {
        borderRadius: 8,
    },

    '&:hover': {
        cursor: 'pointer',
        // boxShadow: "0px 0px 20px -10px rgba(0,0,0,0.4)",
        // scale: 1,
        // transform: "scale(1.03)",
        'strong, span': {
            fontSize: '$md',
        },
    },

    '@bp1': {
        img: {
            width: '14rem',
            height: '14rem',
        },
    },
})

export const ProductInfo = styled('div', {
    display: 'flex',
    flexDirection: 'column',

    width: '100%',
    gap: '.3rem',

    marginTop: '.4rem',
    justifyContent: 'space-between',
    textDecoration: 'none',

    strong: {
        fontWeight: 500,
    },
    span: {
        color: '$green700',
        fontSize: '$sm',
    },
})
