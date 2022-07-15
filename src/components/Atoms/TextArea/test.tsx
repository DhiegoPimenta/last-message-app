import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import TextArea from '.'

describe('<TextArea />', () => {
    it('Should render the textarea', () => {
        const { container } = renderWithTheme(<TextArea />)

        expect(
            screen.getByLabelText(/campo de inserção de texto/i)
        ).toBeInTheDocument()

        expect(container.firstChild).toMatchSnapshot()
    })
})
