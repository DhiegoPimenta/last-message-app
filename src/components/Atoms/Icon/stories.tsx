import { Story, Meta } from '@storybook/react/types-6-0'

import Icon, { IconProps } from '.'

export default {
    title: 'Atoms/Icon',
    component: Icon,
} as Meta

export const Basic: Story<IconProps> = (args) => <Icon {...args} />
Basic.args = {
    iconName: 'mail',
    size: 'medium',
}
