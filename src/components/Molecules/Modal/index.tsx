import Button, { ButtonColorStyle } from 'components/Atoms/Button'
import Text from 'components/Atoms/Text'
import Title from 'components/Atoms/Title'

import * as S from './styles'

export type ButtonProps = {
    label: string
    handleClick: () => void
    type: ButtonColorStyle
}

export type ModalProps = {
    title: string
    description: string
    showModal?: boolean
    children?: React.ReactNode
    buttonAction?: ButtonProps
    buttonCancel?: ButtonProps
}

const Modal = ({
    children,
    title,
    description,
    buttonAction,
    buttonCancel,
}: ModalProps) => (
    <S.Overlay>
        <S.Wrapper>
            <Title size="normal" color="primary" weight="extrabold" fullWidth>
                {title}
            </Title>
            <Text tagName="p" fullWidth>
                {description}
            </Text>

            {children}

            <S.ButtonWrapper>
                {buttonCancel && (
                    <Button
                        colorStyle={buttonCancel.type}
                        onClick={() => buttonCancel.handleClick()}
                    >
                        {buttonCancel.label}
                    </Button>
                )}
                {buttonAction && (
                    <Button
                        colorStyle={buttonAction.type}
                        onClick={() => buttonAction.handleClick()}
                    >
                        {buttonAction.label}
                    </Button>
                )}
            </S.ButtonWrapper>
        </S.Wrapper>
    </S.Overlay>
)

export default Modal
