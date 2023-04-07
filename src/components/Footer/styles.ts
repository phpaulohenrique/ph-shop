import { styled } from '@/styles/styles'

export const FooterContainer = styled('footer', {
    width: '100%',
    // height: "6rem",
    // background: "blue",
    position: 'absolute',
    bottom: 0,
    left: 0,
    borderTop: '1px solid $gray300',
    color: '$gray700',
    fontSize: '$xsm',

    backgroundColor: '$gray200',

    padding: '2rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
    flexDirection: 'column',
})
