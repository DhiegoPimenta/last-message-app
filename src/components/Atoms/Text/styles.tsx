import styled, { css } from 'styled-components'
import theme from 'styles/theme'
import { TextProps } from '.'

const wrapperModifiers = {
    fullWidth: () => css`
        text-align: center;
    `,
}

export const Text = styled.text<
    Pick<TextProps, 'color' | 'fullWidth' | 'size'>
>`
    ${({ color, fullWidth, size }) => css`
        color: ${theme.colors[color!]};
        font-size: ${theme.font.sizes[size!]};
        width: 100%;
        display: block;
        font-weight: ${theme.font.normal};
        ${!!fullWidth && wrapperModifiers.fullWidth()}
    `}
`
