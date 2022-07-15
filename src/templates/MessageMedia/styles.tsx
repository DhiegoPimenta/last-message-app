import styled, { css } from 'styled-components'

export const WrapperLogin = styled.main`
    ${({ theme }) => css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        height: 100%;

        > div {
            > h1 {
                margin-top: ${theme.spacings.medium};
            }
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        > section {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 80%;

            div {
                margin-top: ${theme.spacings.small};
            }

            button {
                margin-top: ${theme.spacings.xxlarge};
            }
        }
    `}
`
export const DragDropFile = styled.label`
    ${({ theme }) => css`
        border: 4px dashed ${theme.colors.danger};
        background-size: cover;
        cursor: pointer;
        height: 33rem;
        width: 100%;
        border-radius: ${theme.border.radius};

        display: flex;
        justify-content: center;
        align-items: center;

        input {
            display: none;
        }

        .has-thumbnail {
            border: 0;
        }

        .has-thumbnail img {
            display: none;
        }
    `}
`
