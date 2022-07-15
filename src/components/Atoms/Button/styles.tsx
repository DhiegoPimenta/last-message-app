import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from '.'

const wrapperModifiers = {
    success: (theme: DefaultTheme) => css`
        background-color: ${theme.colors.primary};
        color: ${theme.colors.white};
    `,
    danger: (theme: DefaultTheme) => css`
        background-color: ${theme.colors.danger};
        color: ${theme.colors.white};
    `,
    info: (theme: DefaultTheme) => css`
        background-color: ${theme.colors.gray};
        color: ${theme.colors.white};
    `,
}

export const Button = styled.button<ButtonProps>`
    ${({ theme, colorStyle }) => css`
        ${wrapperModifiers[colorStyle!](theme)}
        border-radius: ${theme.border.radius};
        width: 18rem;
        height: 5rem;
        border: 0;
        cursor: pointer;

        font-weight: ${theme.font.light};
        font-size: ${theme.font.sizes.medium};
    `})}
`
