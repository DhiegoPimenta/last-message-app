import { Story, Meta } from '@storybook/react/types-6-0'

import InputFile, { InputFileProps } from '.'

export default {
    title: 'Atoms/InputFile',
    component: InputFile,
} as Meta

export const Basic: Story<InputFileProps> = (args) => <InputFile {...args} />
Basic.args = {}
