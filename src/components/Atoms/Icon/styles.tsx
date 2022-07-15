import styled, { css } from 'styled-components'
import { IconProps } from '.'

const wrapperModifiers = {
    small: () => css`
        width: 3.5rem;
        height: 3.5rem;
    `,
    medium: () => css`
        width: 7.25rem;
        height: 7.25rem;
    `,
    large: () => css`
        width: 11rem;
        height: 11rem;
    `,
}

export const Image = styled.img<Pick<IconProps, 'size'>>`
    ${({ size }) => css`
        ${wrapperModifiers[size!]()}
    `}
`
