import { Story, Meta } from '@storybook/react/types-6-0'

import LottieAnimate, { LottieAnimateProps } from '.'

export default {
    title: 'Atoms/LottieAnimate',
    component: LottieAnimate,
} as Meta

export const Basic: Story<LottieAnimateProps> = (args) => (
    <LottieAnimate {...args} />
)

Basic.args = {
    animationName: 'woman',
}
