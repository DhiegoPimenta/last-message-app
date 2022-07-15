import { ChevronLeft, ChevronRight } from '@styled-icons/fa-solid'
import { Settings } from 'react-slick'
import { ThemeColors } from 'styles/global'

import * as S from './styles'

export type CarrouselProps = {
    children: React.ReactNode
    countItems: number
    textColor?: ThemeColors
    centerMode?: boolean
    hiddenArrows?: boolean
    alignItemsCenter?: boolean
    sliderOptions?: Settings
}

const Carrousel = ({
    countItems,
    children,
    textColor = 'primary',
    hiddenArrows = false,
    centerMode = false,
    alignItemsCenter = true,
    sliderOptions = {},
}: CarrouselProps) => {
    const settings: Settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: countItems,
        slidesToScroll: countItems,
        prevArrow: hiddenArrows ? (
            <></>
        ) : (
            <ChevronLeft aria-label="voltar slide" />
        ),
        nextArrow: hiddenArrows ? (
            <></>
        ) : (
            <ChevronRight aria-label="avançar slide" />
        ),
        centerMode: centerMode,
        centerPadding: centerMode ? '25%' : '0px',
        ...sliderOptions,
    }

    return (
        <S.SliderContainer
            centerMode={centerMode}
            alignItemsCenter={alignItemsCenter}
            textColor={textColor}
        >
            <S.SliderSlick
                {...settings}
                centerMode={centerMode}
                textColor={textColor}
            >
                {children}
            </S.SliderSlick>
        </S.SliderContainer>
    )
}

export default Carrousel
