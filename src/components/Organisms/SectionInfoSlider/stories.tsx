import { Story, Meta } from '@storybook/react/types-6-0'

import SectionInfoSlider, { SectionInfoSliderProps } from '.'

export default {
    title: 'Organisms/SectionInfoSlider',
    component: SectionInfoSlider,
} as Meta

export const Basic: Story<SectionInfoSliderProps> = (args) => (
    <SectionInfoSlider {...args} />
)

Basic.args = {
    animationName: 'woman',
    messages: [
        'O last message é serviço que entrega sua mensagem aos seus queridos 1',
        'O last message é serviço que entrega sua mensagem aos seus queridos 2',
        'O last message é serviço que entrega sua mensagem aos seus queridos 3',
    ],
}
