import { AnimationNames } from 'components/Atoms/LottieAnimate'
import SectionInfoSlider from 'components/Organisms/SectionInfoSlider'
import * as S from './styles'

export type TemplateWithCarrouselIntroduceProps = {
    messages: string[]
    animationName: AnimationNames | 'logo'
    Component: React.ElementType
    carrouselMinor?: boolean
    carrouselFirst?: boolean
}

const TemplateWithCarrouselIntroduce = ({
    messages,
    animationName,
    Component,
    carrouselMinor,
    carrouselFirst,
}: TemplateWithCarrouselIntroduceProps) => {
    return (
        <S.Wrapper
            carrouselMinor={carrouselMinor}
            carrouselFirst={carrouselFirst}
            data-testid="wrapper-template"
        >
            <main data-testid="component">
                <Component />
            </main>
            <section data-testid="carrousel">
                <SectionInfoSlider
                    animationName={animationName}
                    messages={messages}
                    colorMessages="white"
                    textSize={carrouselMinor ? 'medium' : 'large'}
                />
            </section>
        </S.Wrapper>
    )
}

export default TemplateWithCarrouselIntroduce
