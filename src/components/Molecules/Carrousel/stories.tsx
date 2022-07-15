import { Meta, Story } from '@storybook/react/types-6-0'
import Title from 'components/Atoms/Title'

import Carrousel, { CarrouselProps } from '.'

export default {
    title: 'Molecules/Carrousel',
    component: Carrousel,
} as Meta<CarrouselProps>

export const Basic: Story<CarrouselProps> = (args) => (
    <Carrousel {...args}>
        <Title fullWidth>any-item-1</Title>
        <Title fullWidth>any-item-2</Title>
        <Title fullWidth>any-item-3</Title>
    </Carrousel>
)

Basic.args = {
    countItems: 1,
    centerMode: false,
    textColor: 'primary',
}
