import { Story, Meta } from '@storybook/react/types-6-0'

import Button, { ButtonProps } from '.'

export default {
    title: 'Atoms/Button',
    component: Button,
} as Meta

export const Basic: Story<ButtonProps> = (args) => (
    <Button {...args}>Click me</Button>
)
Basic.args = {
    colorStyle: 'success',
}
