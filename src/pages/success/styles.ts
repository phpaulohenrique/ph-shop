import { styled } from '../../styles/styles'

export const Container = styled('div', {
    // backgroundColor: "blue",
    // background: "red",

    h2: {
        color: '$blue500',
    },

    display: 'flex',
    flexDirection: 'column',
    gap: '1.6rem',

    svg: {
        display: 'inline-block',
        marginBottom: '-.6rem',
    },
})

export const ContainerProducts = styled('div', {
    marginTop: '2rem',
    display: 'flex',
    gap: '2rem',
    flexDirection: 'column',
    paddingBottom: '3rem',

    div: {
        display: 'flex',
        gap: '1rem',
        alignItems: 'center',
        // flexWrap: "wrap",
    },
})
