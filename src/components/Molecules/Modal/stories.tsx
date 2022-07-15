import { Story, Meta } from '@storybook/react/types-6-0'

import Modal, { ModalProps } from '.'

export default {
    title: 'Molecules/Modal',
    component: Modal,
} as Meta

export const Basic: Story<ModalProps> = (args) => <Modal {...args} />
Basic.args = {
    title: 'title',
    description: 'description',
    buttonAction: {
        label: 'success',
        handleClick: () => {},
        type: 'info',
    },
    buttonCancel: {
        label: 'error',
        handleClick: () => {},
        type: 'danger',
    },
}
