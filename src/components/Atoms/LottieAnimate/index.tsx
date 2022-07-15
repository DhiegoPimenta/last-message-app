import Lottie from 'react-lottie'
import womanData from 'lotties/woman-draw.json'
import paperData from 'lotties/paper.json'
import pairData from 'lotties/pair.json'
import * as S from './styles'
export type AnimationNames = 'woman' | 'paper' | 'pair'
export type LottieAnimateProps = {
    animationName: AnimationNames
}

const LottieAnimate = ({ animationName }: LottieAnimateProps) => {
    const animationData = {
        woman: {
            label: 'animação menina com coração e avião de papel',
            data: womanData,
        },
        paper: {
            label: 'animação envelope de carta',
            data: paperData,
        },
        pair: {
            label: 'animação casal apaixonado',
            data: pairData,
        },
    }

    return (
        <S.Wrapper aria-label={animationData[animationName].label}>
            <Lottie
                options={{
                    animationData: animationData[animationName].data,
                }}
            />
        </S.Wrapper>
    )
}

export default LottieAnimate
