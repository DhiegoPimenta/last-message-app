import styled, { css } from 'styled-components'
import { LinkToProps } from '.'

const wrapperModifiers = {
    fullWidth: () => css`
        width: 100%;
        text-align: center;
        display: block;
    `,
    noUnderline: () =>
        css`
            text-decoration: none;
        `,
}

export const LinkTo = styled.a<Pick<LinkToProps, 'fullWidth' | 'noUnderline'>>`
    ${({ theme, fullWidth, noUnderline }) => css`
        color: ${theme.colors.primary};
        text-decoration: underline;
        font-size: ${theme.font.sizes.medium};
        cursor: pointer;
        ${!!fullWidth && wrapperModifiers.fullWidth()}
        ${!!noUnderline && wrapperModifiers.noUnderline()}
    `}
`
