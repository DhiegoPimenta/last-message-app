import styled, { css } from 'styled-components'
import { LogoProps } from '.'

const wrapperModifiers = {
    small: () => css`
        width: 12rem;
        height: 12rem;
    `,
    normal: () => css`
        width: 15rem;
        height: 15rem;
    `,
    large: () => css`
        width: 22.6rem;
        height: 22.6rem;
    `,
    center: () => css`
        margin: 2rem auto;
    `,
}

export const Logo = styled.img<LogoProps>`
    ${({ size, center }) => css`
        img {
        }
        width: 100%;

        ${!!size && wrapperModifiers[size!]()}
        ${!!center && wrapperModifiers.center()}
    `}
`
