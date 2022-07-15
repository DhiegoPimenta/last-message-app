import styled, { css } from 'styled-components'

const wrapperModifiers = {
    carrouselMinor: () =>
        css`
            > main {
                width: 61%;
            }

            > section {
                width: 39%;
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
        `,
    carrouselFirst: () =>
        css`
            flex-direction: row-reverse;
        `,
}

type WrapperProps = {
    carrouselMinor?: boolean
    carrouselFirst?: boolean
}
export const Wrapper = styled.div<WrapperProps>`
    ${({ theme, carrouselMinor, carrouselFirst }) => css`
        display: flex;

        > main {
            width: 39%;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        > section {
            width: 61%;
            height: 100vh;
            background-color: ${theme.colors.primary};

            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        ${carrouselMinor && wrapperModifiers.carrouselMinor()}
        ${carrouselFirst && wrapperModifiers.carrouselFirst()}

        @media (max-width: 768px) {
            flex-direction: column;
            > main,
            > section {
                width: 100%;
                height: 100vh;
            }
        }
    `}
`
