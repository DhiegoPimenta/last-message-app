import styled, { css } from 'styled-components'

export const Input = styled.div`
    ${({ theme }) => css`
        border-radius: ${theme.border.radius};
        border: 1px solid ${theme.colors.gray};
        display: flex;
        width: 45rem;
        height: 5rem;
        padding: 0 ${theme.spacings.small};
        align-items: center;

        input {
            height: 100%;
            width: 100%;
            border: none;
            margin: 0 ${theme.spacings.xsmall};
            outline: none;
            font-size: ${theme.font.sizes.small};

            ::placeholder {
                color: ${theme.colors.gray};
                font-size: ${theme.font.sizes.small};
            }
        }
    `}
`

export const ErrorMessage = styled.span`
    ${({ theme }) => css`
        color: ${theme.colors.danger};
        font-size: ${theme.font.sizes.xsmall};
        margin-top: ${theme.spacings.xxsmall};
    `}
`
