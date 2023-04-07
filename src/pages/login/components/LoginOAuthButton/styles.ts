import { styled } from '@/styles/styles'

export const ButtonLogin = styled('button', {
    marginTop: '1rem',
    backgroundColor: 'transparent',
    border: '1px solid $blue300',
    borderRadius: 4,
    color: '$gray500',
    textTransform: 'capitalize',

    padding: '.6rem',
    cursor: 'pointer',
    fontWeight: '500',
    fontSize: '$sm',
    height: '2.4rem',

    width: '18rem',
    margin: 'auto',
    display: 'flex',
    alignItems: 'center',

    justifyContent: 'center',
    gap: '.4rem',
})
