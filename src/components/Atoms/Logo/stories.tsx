import { Story, Meta } from '@storybook/react/types-6-0'

import Logo, { LogoProps } from '.'

export default {
    title: 'Atoms/Logo',
    component: Logo,
} as Meta

export const Basic: Story<LogoProps> = (args) => <Logo {...args} />
Basic.args = {
    size: 'normal',
    navigateToHome: true,
}
