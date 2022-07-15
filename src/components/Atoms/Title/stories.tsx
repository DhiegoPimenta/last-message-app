import { Story, Meta } from '@storybook/react/types-6-0'

import Title, { TitleProps } from '.'

export default {
    title: 'Atoms/Title',
    component: Title,
} as Meta

export const Basic: Story<TitleProps> = (args) => (
    <Title {...args}>Titulo</Title>
)
Basic.args = {
    size: 'normal',
    color: 'primary',
}
