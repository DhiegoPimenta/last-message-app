import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Carrousel from '.'

describe('<Carrousel />', () => {
    it('should be render with arrows', () => {
        const { container } = renderWithTheme(
            <Carrousel countItems={1}>
                <h2>any-item-1</h2>
                <h2>any-item-2</h2>
                <h2>any-item-3</h2>
            </Carrousel>
        )

        expect(screen.getByLabelText(/voltar slide/i)).toBeInTheDocument()
        expect(screen.getByLabelText(/avançar slide/i)).toBeInTheDocument()
        expect(
            screen.getByRole('heading', { name: /any-item-1/i })
        ).toBeInTheDocument()

        expect(container.firstChild).toMatchSnapshot()
    })

    it('should be render without arrows', () => {
        renderWithTheme(
            <Carrousel countItems={1} hiddenArrows>
                <h2>any-item-1</h2>
                <h2>any-item-2</h2>
                <h2>any-item-3</h2>
            </Carrousel>
        )

        expect(screen.queryByLabelText(/voltar slide/i)).not.toBeInTheDocument()
        expect(
            screen.queryByLabelText(/avançar slide/i)
        ).not.toBeInTheDocument()

        expect(
            screen.getByRole('heading', { name: /any-item-1/i })
        ).toBeInTheDocument()
    })

    it('should be centermode', () => {
        const { container } = renderWithTheme(
            <Carrousel countItems={1} centerMode>
                <h2>any-item-1</h2>
                <h2>any-item-2</h2>
                <h2>any-item-3</h2>
            </Carrousel>
        )

        const element = container.querySelector('.slick-list')

        expect(element).toHaveStyle({
            padding: '0px 25%',
        })
    })
})
