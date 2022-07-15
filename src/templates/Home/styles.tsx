import styled, { css } from 'styled-components'

export const WrapperLogin = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 60%;

    > section {
        display: flex;
        width: 100%;
        justify-content: space-around;
    }

    @media (max-width: 768px) {
        height: 90vh;

        > section {
            justify-content: space-around;
            flex-direction: column;
            height: 100vh;
        }
    }
`

export const ButtonHome = styled.div`
    ${({ theme }) => css`
        display: flex;
        flex-direction: column;
        align-items: center;
        color: ${theme.colors.primary};
    `}
`
