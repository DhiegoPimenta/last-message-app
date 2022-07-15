import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import InputFile from '.'

describe('<InputFile/>', () => {
    it('Should be render InputFile', () => {
        const { container } = renderWithTheme(<InputFile />)

        expect(
            screen.getByText(/Adicione seu video ou imagem/i)
        ).toBeInTheDocument()
        expect(container.firstChild).toMatchSnapshot()
    })
})
