import * as S from './styles'
import Link from 'next/link'

export type LinkToProps = {
    children: React.ReactNode
    url: string
    fullWidth?: boolean
    noUnderline?: boolean
}

const LinkTo = ({ children, url, fullWidth, noUnderline }: LinkToProps) => (
    <Link href={url}>
        <S.LinkTo
            href={url}
            fullWidth={fullWidth}
            noUnderline={noUnderline}
            data-testid="link-button"
        >
            {children}
        </S.LinkTo>
    </Link>
)

export default LinkTo
