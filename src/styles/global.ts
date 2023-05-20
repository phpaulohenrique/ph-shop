import { globalCss, styled } from './styles'

export const globalStyles = globalCss({
    '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
    },

    body: {
        '-webkit-font-smoothing': 'antialiased',
        backgroundColor: '$gray100',
        color: '$gray800',
        maxWidth: '100vw',
        position: 'relative',
    },
    'body, input, textarea, button': {
        fontFamily: 'Inter, sans-serif',
        fontWeight: 500,

        fontSize: '1rem', // 16px
        '@bp1': {
            fontSize: '.94rem', // 15px
        },
    },

    'button:disabled': {
        opacity: 0.6,
        cursor: 'default',
    },

    'button:not(:disabled):hover': {
        filter: 'brightness(.8)',
        transition: 'filter 0.2s',
        cursor: 'pointer',
    },
    'h1, h2,h3,h4,h5,h6': {
        color: '$blue500',
    },
})

export const Wrapper = styled('div', {
    maxWidth: '1180px',
    margin: '0 auto',
    marginTop: '8rem',
    padding: '0 1rem',
    paddingBottom: '14rem',

    minHeight: '100vh',

    '@bp1': {
        marginTop: '6rem',
    },
})
