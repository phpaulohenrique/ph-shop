import { styled } from '@/styles/styles'

export const Container = styled('main', {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',

    'h2, h3': {
        fontSize: '$2xl',
    },
})
