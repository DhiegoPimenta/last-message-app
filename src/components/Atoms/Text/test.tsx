import { screen } from '@testing-library/react'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'

import Text from '.'

describe('<Text />', () => {
    it('should render text', () => {
        const { container } = renderWithTheme(<Text tagName="h2">text</Text>)

        expect(screen.getByRole('heading')).toBeInTheDocument()

        expect(container.firstChild).toMatchSnapshot()
    })

    it('should render mediun and primary color as default', () => {
        renderWithTheme(<Text tagName="h2">Text</Text>)

        expect(screen.getByText(/text/i)).toBeInTheDocument()

        expect(screen.getByText(/text/i)).toHaveStyle({
            'font-size': '2.4rem',
            color: theme.colors.primary,
        })
    })

    it('should render change size', () => {
        renderWithTheme(<Text size="large">text</Text>)

        expect(screen.getByText(/text/i)).toBeInTheDocument()
        expect(screen.getByText(/text/i)).toHaveStyle({
            'font-size': '3.2rem',
        })
    })

    it('should render change color', () => {
        renderWithTheme(<Text color="danger">text</Text>)

        expect(screen.getByText(/text/i)).toBeInTheDocument()
        expect(screen.getByText(/text/i)).toHaveStyle({
            color: theme.colors.danger,
        })
    })

    it('should render full width', () => {
        renderWithTheme(<Text fullWidth>text</Text>)

        expect(screen.getByText(/text/i)).toBeInTheDocument()
        expect(screen.getByText(/text/i)).toHaveStyle({
            width: '100%',
            'text-align': 'center',
        })
    })
})
