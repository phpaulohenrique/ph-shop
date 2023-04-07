import * as Dialog from '@radix-ui/react-dialog'
import { styled } from '@/styles/styles'

export const DialogOverlay = styled(Dialog.Overlay, {
    backgroundColor: 'rgba(8,8,8, 0.7)',
    position: 'fixed',
    zIndex: 99999,

    inset: 0,
})

export const DialogContent = styled(Dialog.Content, {
    backgroundColor: '$gray100',
    zIndex: 99999,
    width: 0,
    position: 'fixed',
    top: 0,
    right: 0,
    overflowX: 'hidden',
    height: '100vh',
    padding: '.8rem',
    transition: '1000ms',

    '&[data-state="open"]': {
        transition: '3000ms',
        width: '54vw',
    },
})

export const DialogTitle = styled(Dialog.Title, {
    margin: '0',
    fontWeight: 500,
    color: '$blue500',
    fontSize: '1rem',

    position: 'absolute',
    top: 12,
    left: '1.4rem',
})

export const DialogDescription = styled(Dialog.Description, {
    margin: '10px 0 20px',
    color: 'blue',
    fontSize: '1rem',
    lineHeight: '1.5',
})

export const DialogClose = styled(Dialog.Close, {
    border: 0,
    background: 'transparent',
    position: 'absolute',
    top: 12,
    right: 16,
})

export const Container = styled('aside', {
    marginTop: '4rem',

    ul: {
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    },

    'li button': {
        width: '80%',
        border: 0,
        background: 'transparent',
    },

    'li > span': {
        marginLeft: '.4rem',
    },

    a: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 6,
        padding: '.8rem',
        gap: '.2rem',
        fontSize: '$sm',
        textDecoration: 'none',
        color: '$blue300',
    },
    span: {
        display: 'block',
        color: '$gray500',
        fontSize: '$xsm',
    },

    svg: {
        color: '#008490',
    },
})
