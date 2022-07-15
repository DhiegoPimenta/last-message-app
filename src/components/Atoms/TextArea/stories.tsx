import { Story, Meta } from '@storybook/react/types-6-0'

import TextArea from '.'

export default {
    title: 'Atoms/TextArea',
    component: TextArea,
} as Meta

export const Basic: Story = (args) => <TextArea {...args} />
