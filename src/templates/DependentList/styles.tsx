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
            margin-top: 5rem;
            width: 90%;

            div.dependentItem {
                margin-top: ${theme.spacings.small};
            }

            button {
                margin-top: ${theme.spacings.xxlarge};
            }
        }
    `}
`

export const ListDepentents = styled.span`
    width: 95%;
    height: 50vh;
    max-height: 50vh;
    overflow-y: auto;
`

export const Item = styled.div`
    display: flex;
    width: 100%;
`

export const DeleteItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`
