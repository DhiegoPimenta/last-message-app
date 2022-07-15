import { ThemeColors } from 'styles/global'
import * as S from './styles'

export type TitleProps = {
    children: React.ReactNode
    fullWidth?: boolean
    size?: 'normal' | 'large'
    weight?: 'normal' | 'bold' | 'extrabold'
    color?: ThemeColors
}

const Title = ({
    children,
    size = 'normal',
    color = 'primary',
    weight = 'bold',
    fullWidth,
}: TitleProps) => (
    <S.Title size={size} color={color} fullWidth={fullWidth} weight={weight}>
        {children}
    </S.Title>
)

export default Title
