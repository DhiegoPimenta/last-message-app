import Logo from 'components/Atoms/Logo'
import LottieAnimate, { AnimationNames } from 'components/Atoms/LottieAnimate'
import Text from 'components/Atoms/Text'
import Carrousel from 'components/Molecules/Carrousel'
import { ThemeColors, ThemeFontSizes } from 'styles/global'
import * as S from './styles'

export type SectionInfoSliderProps = {
    animationName: AnimationNames | 'logo'
    messages: string[]
    colorMessages?: ThemeColors
    textSize?: ThemeFontSizes
}

const SectionInfoSlider = ({
    animationName,
    messages,
    colorMessages = 'primary',
    textSize = 'large',
}: SectionInfoSliderProps) => (
    <S.Wrapper>
        <S.WrapperLogo>
            {animationName === 'logo' ? (
                <div>
                    <Logo size="large" center />
                </div>
            ) : (
                <LottieAnimate animationName={animationName} />
            )}
        </S.WrapperLogo>

        <Carrousel countItems={1} textColor={colorMessages}>
            {messages.map((message) => (
                <S.TextWrapper key={message}>
                    <Text
                        color={colorMessages}
                        tagName="h2"
                        size={textSize}
                        fullWidth
                    >
                        {message}
                    </Text>
                </S.TextWrapper>
            ))}
        </Carrousel>
    </S.Wrapper>
)

export default SectionInfoSlider
