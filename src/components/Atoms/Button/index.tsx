import * as S from './styles'

export type ButtonColorStyle = 'info' | 'success' | 'danger'

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    colorStyle?: ButtonColorStyle
    isLoading?: boolean
}

const Button = ({
    children,
    colorStyle = 'success',
    type,
    isLoading,
    ...props
}: ButtonProps) => (
    <S.Button colorStyle={colorStyle} type={type} {...props}>
        {isLoading ? 'enviando...' : children}
    </S.Button>
)

export default Button
