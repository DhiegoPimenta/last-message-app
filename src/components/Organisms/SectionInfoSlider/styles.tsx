import styled from 'styled-components'

export const Wrapper = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    z-index: 2;
`

export const WrapperLogo = styled.div`
    width: 100%;
    height: 70vh;
    max-height: 70vh;

    > div {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const TextWrapper = styled.div`
    width: 80% !important;
    display: block !important;
    margin: 0 auto;
`
