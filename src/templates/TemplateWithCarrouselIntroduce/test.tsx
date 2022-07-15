import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import TemplateWithCarrouselIntroduce from '.'

describe('<TemplateWithCarrouselIntroduce />', () => {
    it('should render template with carrousel and the heading', () => {
        const messages = ['any-message-1', 'any-message-2', 'any-message-3']
        const mockComponent = () => (
            <div>
                <h2>Mock component</h2>
            </div>
        )
        const { container } = renderWithTheme(
            <TemplateWithCarrouselIntroduce
                animationName="woman"
                messages={messages}
                Component={mockComponent}
            />
        )

        expect(
            screen.getByLabelText(
                /animação menina com coração e avião de papel/i
            )
        ).toBeInTheDocument()

        expect(
            screen.getByRole('heading', { name: /any-message-1/i })
        ).toBeInTheDocument()

        expect(
            screen.getByRole('heading', { name: /Mock component/i })
        ).toBeInTheDocument()

        expect(screen.getByTestId('component')).toHaveStyle({
            width: '39%',
        })

        expect(screen.getByTestId('carrousel')).toHaveStyle({
            width: '61%',
        })

        expect(container.firstChild).toMatchSnapshot()
    })

    it('should render the template with minor carrousel', () => {
        const messages = ['any-message-1', 'any-message-2', 'any-message-3']
        const mockComponent = () => (
            <div>
                <h2>Mock component</h2>
            </div>
        )
        const { container } = renderWithTheme(
            <TemplateWithCarrouselIntroduce
                animationName="woman"
                messages={messages}
                Component={mockComponent}
                carrouselMinor
            />
        )

        expect(
            screen.getByLabelText(
                /animação menina com coração e avião de papel/i
            )
        ).toBeInTheDocument()

        expect(
            screen.getByRole('heading', { name: /any-message-1/i })
        ).toBeInTheDocument()
        expect(
            screen.getByRole('heading', { name: /Mock component/i })
        ).toBeInTheDocument()

        expect(screen.getByTestId('component')).toHaveStyle({
            width: '61%',
        })

        expect(screen.getByTestId('carrousel')).toHaveStyle({
            width: '39%',
        })

        expect(container.firstChild).toMatchSnapshot()
    })

    it('should render the template with first carrousel', () => {
        const messages = ['any-message-1', 'any-message-2', 'any-message-3']
        const mockComponent = () => (
            <div>
                <h2>Mock component</h2>
            </div>
        )
        const { container } = renderWithTheme(
            <TemplateWithCarrouselIntroduce
                animationName="woman"
                messages={messages}
                Component={mockComponent}
                carrouselFirst
                carrouselMinor
            />
        )

        expect(
            screen.getByLabelText(
                /animação menina com coração e avião de papel/i
            )
        ).toBeInTheDocument()

        expect(
            screen.getByRole('heading', { name: /any-message-1/i })
        ).toBeInTheDocument()
        expect(
            screen.getByRole('heading', { name: /Mock component/i })
        ).toBeInTheDocument()

        expect(screen.getByTestId('component')).toHaveStyle({
            width: '61%',
        })

        expect(screen.getByTestId('carrousel')).toHaveStyle({
            width: '39%',
        })

        expect(screen.getByTestId('wrapper-template')).toHaveStyle({
            'flex-direction': 'row-reverse',
        })

        expect(container.firstChild).toMatchSnapshot()
    })
})
