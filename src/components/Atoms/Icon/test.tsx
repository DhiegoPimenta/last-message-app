import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Icon from '.'

describe('<Icon/>', () => {
    it('Should be render Icon', () => {
        const { container } = renderWithTheme(<Icon iconName="home" />)

        expect(screen.getByLabelText('Icone de casa')).toBeInTheDocument()
        expect(container.firstChild).toMatchSnapshot()
    })

    it('Should be render bigger', () => {
        renderWithTheme(<Icon iconName="home" size="large" />)

        expect(screen.getByLabelText('Icone de casa')).toHaveStyle({
            width: '11rem',
            height: '11rem',
        })
    })

    it('Should be render smaller', () => {
        renderWithTheme(<Icon iconName="home" size="small" />)

        expect(screen.getByLabelText('Icone de casa')).toHaveStyle({
            width: '3.5rem',
            height: '3.5rem',
        })
    })

    it('Should be exec handle on click', () => {
        const mockClick = jest.fn()

        renderWithTheme(
            <Icon iconName="home" size="small" handleClick={mockClick} />
        )

        fireEvent.click(screen.getByLabelText('Icone de casa'))

        expect(mockClick).toHaveBeenCalled()
    })
})
