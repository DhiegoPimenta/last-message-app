import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Input from '.'

describe('<Input/>', () => {
    it('Should be render Input', () => {
        const { container } = renderWithTheme(<Input iconName="home" />)

        expect(screen.getByLabelText('Icone de casa')).toBeInTheDocument()
        expect(container.firstChild).toMatchSnapshot()
    })
})
