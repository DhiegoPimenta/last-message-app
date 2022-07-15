import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import LottieAnimate from '.'

describe('<LottieAnimate />', () => {
    it('should render', () => {
        const { container } = renderWithTheme(
            <LottieAnimate animationName="woman" />
        )

        expect(
            screen.getByLabelText(
                /animação menina com coração e avião de papel/i
            )
        ).toBeInTheDocument()

        expect(container.firstChild).toMatchSnapshot()
    })
})
