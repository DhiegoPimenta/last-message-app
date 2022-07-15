import styled, { css } from 'styled-components'

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
