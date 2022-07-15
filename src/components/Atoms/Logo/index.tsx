import * as S from './styles'
import Link from 'next/link'
import LinkTo from '../Link'

export interface LogoDefaultProps {
    navigateToHome?: boolean
    center?: boolean
}

export interface LogoProps extends LogoDefaultProps {
    size?: 'small' | 'normal' | 'large'
}

const LogoWrapper: React.FC<LogoDefaultProps> = ({
    navigateToHome,
    children,
}) => {
    if (navigateToHome) {
        return (
            <Link href="/">
                <a data-testid="logo-link">{children}</a>
            </Link>
        )
    } else {
        return <>{children}</>
    }
}

const Logo = ({ navigateToHome, size = 'normal', center }: LogoProps) => (
    <LinkTo url="/inicio">
        <LogoWrapper navigateToHome={navigateToHome}>
            <S.Logo
                src="/img/logo.png"
                alt="Logo Last Message"
                size={size}
                center={center}
            />
        </LogoWrapper>
    </LinkTo>
)

export default Logo
