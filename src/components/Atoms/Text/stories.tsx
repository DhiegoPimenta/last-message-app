import { Story, Meta } from '@storybook/react/types-6-0'

import Text, { TextProps } from '.'

export default {
    title: 'Atoms/Text',
    component: Text,
} as Meta

export const Basic: Story<TextProps> = (args) => <Text {...args} />
Basic.args = {
    children: 'texto',
}
