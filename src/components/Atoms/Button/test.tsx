import { fireEvent, screen } from '@testing-library/react'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'
import Button from '.'

describe('<Button/>', () => {
    it('Should be render', () => {
        const { container } = renderWithTheme(<Button>Button</Button>)

        expect(screen.getByText(/Button/i)).toBeInTheDocument()
        expect(container.firstChild).toMatchSnapshot()
    })

    it('Should call the funtion onclick', () => {
        const mockClick = jest.fn()
        renderWithTheme(<Button onClick={mockClick}>Button</Button>)

        fireEvent.click(screen.getByText(/Button/i))

        expect(screen.getByText(/Button/i)).toHaveStyle({
            cursor: 'pointer',
        })
        expect(mockClick).toHaveBeenCalled()
    })

    it('Should be primary background color as default', () => {
        renderWithTheme(<Button>Button</Button>)

        expect(screen.getByText(/button/i)).toHaveStyle({
            'background-color': theme.colors.primary,
            color: theme.colors.white,
        })
    })
})
