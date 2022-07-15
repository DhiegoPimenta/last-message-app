import styled, { css } from 'styled-components'
import { TextAreaProps } from '.'

export const TextArea = styled.textarea<TextAreaProps>`
    ${({ theme }) => css`
        border: 4px solid ${theme.colors.danger};
        border-radius: ${theme.border.radius};
        width: 100%;
        height: 33rem;

        ::placeholder {
            color: ${theme.colors.gray};
            font-size: ${theme.font.sizes.small};
            padding: 3rem;
            font-weight: ${theme.font.bold};
        }
    `}
`
