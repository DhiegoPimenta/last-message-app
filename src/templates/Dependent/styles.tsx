import styled, { css } from 'styled-components'

export const WrapperLogin = styled.main`
    ${({ theme }) => css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;

        > div {
            > h1 {
                margin-top: ${theme.spacings.medium};
            }
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        > form {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 12rem;

            div {
                margin-top: ${theme.spacings.small};
            }

            button {
                margin-top: ${theme.spacings.xxlarge};
            }
        }
    `}
`
