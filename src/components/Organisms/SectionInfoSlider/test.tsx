import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import SectionInfoSlider from '.'

describe('<SectionInfoSlider />', () => {
    it('should render the heading', () => {
        const messages = ['any-message-1', 'any-message-2', 'any-message-3']
        const { container } = renderWithTheme(
            <SectionInfoSlider animationName="woman" messages={messages} />
        )

        expect(
            screen.getByLabelText(
                /animação menina com coração e avião de papel/i
            )
        ).toBeInTheDocument()

        expect(
            screen.getByRole('heading', { name: /any-message-1/i })
        ).toBeInTheDocument()

        expect(container.firstChild).toMatchSnapshot()
    })
})
