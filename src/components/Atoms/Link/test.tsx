import { screen } from '@testing-library/react'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'
import LinkTo from '.'

describe('<Link/>', () => {
    it('Should be render with default values', () => {
        const { container } = renderWithTheme(<LinkTo url="/">Link</LinkTo>)

        expect(screen.getByText(/link/i)).toBeInTheDocument()
        expect(screen.getByText(/link/i)).toHaveStyle({
            color: theme.colors.primary,
            'text-decoration': 'underline',
            cursor: 'pointer',
        })
        expect(container.firstChild).toMatchSnapshot()
    })

    it('Should be render with correctly url value', () => {
        renderWithTheme(<LinkTo url="/test">Link</LinkTo>)

        const link = screen.getByTestId('link-button')
        expect(link.getAttribute('href')).toBe('/test')
    })
})
