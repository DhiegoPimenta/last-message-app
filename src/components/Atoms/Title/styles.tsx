import styled, { css, DefaultTheme } from 'styled-components'
import { TitleProps } from '.'

const wrapperModifiers = {
    normal: (theme: DefaultTheme) => css`
        font-size: 2.4rem;
        font-weight: ${theme.font.normal};
    `,
    large: () => css`
        font-size: 4.8rem;
    `,
    bold: (theme: DefaultTheme) => css`
        font-weight: ${theme.font.bold};
    `,
    extrabold: (theme: DefaultTheme) => css`
        font-weight: ${theme.font.extrabold};
    `,
    fullWidth: () => css`
        width: 100%;
        text-align: center;
    `,
}

export const Title = styled.h1<TitleProps>`
    ${({ theme, size, color, fullWidth, weight }) => css`
        font-weight: bold;
        color: ${theme.colors[color!]};
        ${wrapperModifiers[size!](theme)}
        ${wrapperModifiers[weight!](theme)}
        ${!!fullWidth && wrapperModifiers.fullWidth()}
    `}
`
