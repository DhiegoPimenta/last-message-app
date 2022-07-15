import styled, { css } from 'styled-components'

export const Overlay = styled.div`
    ${({ theme }) => css`
        background: ${theme.colors.overlay};
        width: 100vw;
        height: 100vh;
        position: absolute;
        z-index: ${theme.layers.base};
        left: 0;
        top: 0;

        align-items: center;
        justify-content: center;
    `})}
`

export const Wrapper = styled.div`
    ${({ theme }) => css`
        width: 45rem;
        height: 30rem;
        border: 4px solid ${theme.colors.danger};
        border-radius: ${theme.border.radius};
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        z-index: ${theme.layers.alwaysOnTop};
        background-color: ${theme.colors.white};
    `}
`

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-around;
`
