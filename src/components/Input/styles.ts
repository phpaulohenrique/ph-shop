import { styled } from '@/styles/styles'

export const InputContainer = styled('div', {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    gap: '.2rem',
    alignItems: 'flex-start',
})

export const InputStyle = styled('input', {
    // display: "flex",
    // flex: 1,
    // border: "none",
    padding: '.2rem .6rem',
    outline: 'none',
    fontSize: '$sm',
    // height: "1.8rem",
    border: '1px solid $blue300',
    // overflow: "hidden",
    borderRadius: 4,
    // maxWidth: "20rem",

    label: {
        fontSize: '$md',
    },
})

export const ErrorMessage = styled('span', {
    color: 'red',
    fontSize: '$xsm',
})
