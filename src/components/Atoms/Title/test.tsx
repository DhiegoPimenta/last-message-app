import { screen } from '@testing-library/react'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'

import Title from '.'

describe('<Title />', () => {
    it('should render title', () => {
        const { container } = renderWithTheme(<Title>title</Title>)

        expect(screen.getByText(/title/i)).toBeInTheDocument()

        expect(container.firstChild).toMatchSnapshot()
    })

    it('should render mediun and primary color as default', () => {
        renderWithTheme(<Title>title</Title>)

        expect(screen.getByText(/title/i)).toBeInTheDocument()
        expect(screen.getByText(/title/i)).toHaveStyle({
            'font-weight': '600',
            'font-size': '2.4rem',
            color: theme.colors.primary,
        })
    })

    it('should render change size', () => {
        renderWithTheme(<Title size="large">title</Title>)

        expect(screen.getByText(/title/i)).toBeInTheDocument()
        expect(screen.getByText(/title/i)).toHaveStyle({
            'font-weight': '600',
            'font-size': '4.8rem',
        })
    })

    it('should render change color', () => {
        renderWithTheme(<Title color="danger">title</Title>)

        expect(screen.getByText(/title/i)).toBeInTheDocument()
        expect(screen.getByText(/title/i)).toHaveStyle({
            'font-weight': '600',
            'font-size': '2.4rem',
            color: theme.colors.danger,
        })
    })

    it('should render full width', () => {
        renderWithTheme(<Title fullWidth>title</Title>)

        expect(screen.getByText(/title/i)).toBeInTheDocument()
        expect(screen.getByText(/title/i)).toHaveStyle({
            width: '100%',
            'text-align': 'center',
        })
    })
})
