import { fireEvent, screen } from '@testing-library/react'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'

import Modal, { ButtonProps } from '.'

describe('<Modal />', () => {
    it('should render the modal', () => {
        const { container } = renderWithTheme(
            <Modal title="any-title" description="any-description">
                Modal
            </Modal>
        )

        expect(screen.getByText(/any-title/i)).toBeInTheDocument()
        expect(screen.getByText(/any-description/i)).toBeInTheDocument()
        expect(screen.getByText(/modal/i)).toBeInTheDocument()

        expect(container.firstChild).toMatchSnapshot()
    })

    it('should call funtion on click success button', () => {
        const mockHandle = jest.fn()
        const buttonAction: ButtonProps = {
            label: 'any-success',
            handleClick: mockHandle,
            type: 'success',
        }

        renderWithTheme(
            <Modal
                title="any-title"
                description="any-description"
                buttonAction={buttonAction}
            >
                Modal
            </Modal>
        )

        fireEvent.click(screen.getByText(/any-success/i))

        expect(screen.getByText(/any-success/i)).toBeInTheDocument()
        expect(screen.getByText(/any-success/i)).toHaveStyle({
            backgroundColor: theme.colors.primary,
        })

        expect(mockHandle).toBeCalled()
    })

    it('should call funtion on click error button', () => {
        const mockHandle = jest.fn()
        const buttonCancel: ButtonProps = {
            label: 'any-error',
            handleClick: mockHandle,
            type: 'danger',
        }

        renderWithTheme(
            <Modal
                title="any-title"
                description="any-description"
                buttonCancel={buttonCancel}
            >
                Modal
            </Modal>
        )

        fireEvent.click(screen.getByText(/any-error/i))

        expect(screen.getByText(/any-error/i)).toBeInTheDocument()
        expect(screen.getByText(/any-error/i)).toHaveStyle({
            backgroundColor: theme.colors.danger,
        })

        expect(mockHandle).toBeCalled()
    })
})
