import * as S from './styles'
export type IconsNames =
    | 'document'
    | 'home'
    | 'mail'
    | 'phone'
    | 'trash'
    | 'unlock'
    | 'user'
    | 'send'

export type DataIcon = {
    label: string
    image: string
}

export type IconsDataProps = Record<IconsNames, DataIcon>

export type IconProps = {
    iconName: IconsNames
    size?: 'small' | 'medium' | 'large'
    handleClick?: () => void
}

const Icon = ({ iconName, size = 'medium', handleClick }: IconProps) => {
    const iconsData: IconsDataProps = {
        document: {
            label: 'Icone de documento',
            image: '/img/icons/document.png',
        },
        home: { label: 'Icone de casa', image: '/img/icons/home.png' },
        mail: { label: 'Icone de e-mail', image: '/img/icons/mail.png' },
        phone: { label: 'Icone de telefone', image: '/img/icons/phone.png' },
        trash: { label: 'Icone de lixeira', image: '/img/icons/trash.png' },
        unlock: { label: 'Icone de cadeado', image: '/img/icons/unlock.png' },
        user: { label: 'Icone de usuário', image: '/img/icons/user.png' },
        send: {
            label: 'Icone de envio de mensagem',
            image: '/img/icons/send.png',
        },
    }
    return (
        <S.Image
            size={size}
            aria-label={iconsData[iconName].label}
            src={iconsData[iconName].image}
            onClick={handleClick}
        />
    )
}

export default Icon
