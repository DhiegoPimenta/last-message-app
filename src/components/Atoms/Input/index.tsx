import { HTMLInputTypeAttribute } from 'react'
import Icon, { IconsNames } from '../Icon'
import * as S from './styles'

export interface InputProps
    extends React.ButtonHTMLAttributes<HTMLInputElement> {
    iconName?: IconsNames
    errorMessage?: string
    inputType?: HTMLInputTypeAttribute
    handleChange?(text: string): void
}

const Input = ({
    iconName,
    errorMessage,
    inputType = 'text',
    handleChange,
    ...props
}: InputProps) => {
    return (
        <>
            <S.Input>
                {iconName && <Icon iconName={iconName} size="small" />}
                <input
                    type={inputType}
                    {...props}
                    onChange={(e: React.FormEvent<HTMLInputElement>) =>
                        handleChange && handleChange(e.currentTarget.value)
                    }
                />
            </S.Input>
            <S.ErrorMessage>{errorMessage}</S.ErrorMessage>
        </>
    )
}

export default Input
