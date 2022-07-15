import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Logo from '.'

describe('<Logo />', () => {
    it('should render a white label by default', () => {
        const { container } = renderWithTheme(<Logo />)

        expect(screen.getByAltText(/logo last message/i)).toBeInTheDocument()

        expect(container.firstChild).toMatchSnapshot()
    })

    it('should render a bigger logo', () => {
        renderWithTheme(<Logo size="large" />)

        expect(screen.getByAltText(/logo last message/i)).toHaveStyle({
            width: '22.6rem',
            height: '22.6rem',
        })
    })

    it('should render a smaller logo', () => {
        renderWithTheme(<Logo size="small" />)

        expect(screen.getByAltText(/logo last message/i)).toHaveStyle({
            width: '12rem',
            height: '12rem',
        })
    })

    it('should render a mediun logo by default', () => {
        renderWithTheme(<Logo />)

        expect(screen.getByAltText(/logo last message/i)).toHaveStyle({
            width: '15rem',
            height: '15rem',
        })
    })

    it('should render a link when prop "navigateToHome" is true', () => {
        const { container } = renderWithTheme(<Logo navigateToHome />)

        const link = screen.getByTestId('logo-link')

        expect(link).toBeInTheDocument()
        expect(link.getAttribute('href')).toBe('/')

        expect(container.firstChild).toMatchSnapshot()
    })

    it('should not render a link when prop "navigateToHome" is false', () => {
        renderWithTheme(<Logo />)

        expect(() => screen.getByTestId('logo-link')).toThrowError()
    })
})
