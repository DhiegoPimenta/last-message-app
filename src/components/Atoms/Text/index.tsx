import { ThemeColors, ThemeFontSizes } from 'styles/global'
import * as S from './styles'

export type TextProps = {
    children: string
    color?: ThemeColors
    fullWidth?: boolean
    tagName?: any
    size?: ThemeFontSizes
}

const Text = ({
    children,
    color = 'primary',
    fullWidth,
    tagName = 'p',
    size = 'medium',
}: TextProps) => {
    return (
        <S.Text
            color={color}
            fullWidth={fullWidth}
            size={size}
            as={tagName}
            dangerouslySetInnerHTML={{ __html: children }}
        />
    )
}

export default Text
