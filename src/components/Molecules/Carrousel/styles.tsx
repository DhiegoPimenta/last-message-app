import Slider from 'react-slick'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { ThemeColors } from 'styles/global'
import { CarrouselProps } from '.'

export const SliderContainer = styled.div<{
    centerMode?: boolean
    alignItemsCenter?: boolean
    textColor?: ThemeColors
}>`
    ${({ theme, centerMode, alignItemsCenter, textColor }) => css`
        .slick-list,
        .slick-slider,
        .slick-track {
            position: relative;
            display: flex !important;
            overflow: visible;
            ${alignItemsCenter && 'align-items: center;'}
        }
        .slick-loading .slick-slide,
        .slick-loading .slick-track {
            visibility: hidden;
        }
        .slick-slider {
            box-sizing: border-box;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            -webkit-touch-callout: none;
            -khtml-user-select: none;
            -ms-touch-action: pan-y;
            touch-action: pan-y;
            -webkit-tap-highlight-color: transparent;

            svg {
                width: 20rem;
            }
        }
        .slick-list {
            overflow: hidden;
            margin: 0;
            padding: 0;
        }
        .slick-list:focus {
            outline: 0;
        }
        .slick-list.dragging {
            cursor: pointer;
            cursor: hand;
        }
        .slick-slider .slick-list,
        .slick-slider .slick-track {
            -webkit-transform: translate3d(0, 0, 0);
            -moz-transform: translate3d(0, 0, 0);
            -ms-transform: translate3d(0, 0, 0);
            -o-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
        .slick-track {
            top: 0;
            left: 0;
        }
        .slick-track:after,
        .slick-track:before {
            display: table;
            content: '';
        }
        .slick-track:after {
            clear: both;
        }
        .slick-slide {
            display: none;
            float: left;
            height: 100%;
            min-height: 100%;
        }
        [dir='rtl'] .slick-slide {
            float: right;
        }
        .slick-slide img {
            display: block;
        }
        .slick-slide.slick-loading img {
            display: none;
        }
        .slick-slide.dragging img {
            pointer-events: none;
        }
        .slick-initialized .slick-slide {
            display: block;
        }
        .slick-vertical .slick-slide {
            display: block;
            height: auto;
            border: 1px solid transparent;
        }
        .slick-arrow.slick-hidden {
            display: none;
        }
        .slick-slide > div,
        .slick-slide > div > div {
            height: 100%;
        }

        svg {
            display: ${centerMode ? 'none' : 'block'};
            color: ${theme.colors.white};
            width: 11rem;
            margin: 1rem;
            cursor: pointer;
        }

        .slick-dots {
            position: absolute;
            bottom: -2rem;
            list-style: none;
            display: block;
            text-align: center;
            padding: 0;
            width: 100%;

            ${media.lessThan('medium')`
                bottom: 0rem;
            `}
        }

        .slick-dots li {
            position: relative;
            display: inline-block;
            height: 2rem;
            width: 2rem;
            margin: 0 0.5rem;
            padding: 0;
            cursor: pointer;
            top: 1rem;

            ${media.lessThan('medium')`
                margin: 0 0.1rem;
            `}
        }
        .slick-dots li button {
            border: 0;
            display: block;
            height: 2rem;
            outline: none;
            line-height: 0;
            font-size: 0;
            color: transparent;
            padding: 0.5rem;
            cursor: pointer;
            border-radius: 50%;
            background: transparent;
        }
        .slick-dots li button:hover,
        .slick-dots li button:focus {
            outline: none;
        }
        .slick-dots li button:hover:before,
        .slick-dots li button:focus:before {
            opacity: 1;
        }
        .slick-dots li button:before {
            position: absolute;
            top: 0;
            left: 0;
            content: ' ';
            width: 0.8rem;
            height: 0.8rem;
            background-color: ${theme.colors[textColor!]};
            border-radius: 50%;
            font-family: 'slick';
            font-size: 6px;
            line-height: 5px;
            text-align: center;
            color: ${theme.colors.black};
            opacity: 0.25;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
        .slick-dots li.slick-active button:before {
            color: black;
            opacity: 0.75;
        }
    `}
`

export const SliderSlick = styled(Slider)<Pick<CarrouselProps, 'textColor'>>`
    ${({ theme, textColor }) => css`
        svg {
            color: ${theme.colors[textColor!]};
        }
    `}
`
