import { createGlobalStyle, css } from 'styled-components'
import theme from './theme'
import media from 'styled-media-query'

const GlobalStyles = createGlobalStyle`
    * {
        margin:0;
        padding:0;
        box-sizing:border-box;
        -webkit-font-smoonthing:antialiased;
        -moz-osx-font-smoonthing:grayscale;

        &::before,
        &::after {
            box-sizing:inherit;
        }
    }

    ${({ theme }) => css`
        html {
            font-size: 62.5% !important;

            ${media.lessThan('medium')`
                font-size: 56% !important;
            `}

            &.no-scroll {
                overflow: hidden !important;
            }
        }

        html,
        body {
            width: 100%;
            max-width: 100%;
            max-height: 100vh;
            overflow-x: hidden;
            scroll-behavior: smooth;
        }

        body {
            font-family: ${theme.font.family};
            font-size: ${theme.font.sizes.medium};
            overflow-x: hidden;
        }

        a {
            color: inherit;
        }

        p {
            font-size: ${theme.font.sizes.medium};
        }
    `}

`
export type ThemeColors = keyof typeof theme.colors
export type ThemeFontSizes = keyof typeof theme.font.sizes
export default GlobalStyles
