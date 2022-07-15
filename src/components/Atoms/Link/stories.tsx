import { Story, Meta } from '@storybook/react/types-6-0'

import LinkTo, { LinkToProps } from '.'

export default {
    title: 'Atoms/LinkTo',
    component: LinkTo,
} as Meta

export const Basic: Story<LinkToProps> = (args) => (
    <LinkTo {...args}>Click me</LinkTo>
)
Basic.args = {
    url: '/',
    fullWidth: true,
}
