import Button from 'components/Atoms/Button'
import Logo from 'components/Atoms/Logo'
import TextArea from 'components/Atoms/TextArea'
import Title from 'components/Atoms/Title'
import { MESSAGE_LOCAL_STORAGE } from 'constants/userVariables'
import { useAuth } from 'contexts/auth/auth.provider'
import { useRouter } from 'next/router'
import { FormEvent, useEffect, useState } from 'react'
import TemplateWithCarrouselIntroduce from 'templates/TemplateWithCarrouselIntroduce'
import * as S from './styles'

export default function Message() {
    const messages = [
        'O <strong>last message</strong> é serviço que entrega sua mensagem aos seus queridos',
        'message2',
        'message3',
    ]

    const MessageComponent = () => {
        const { user, setUser } = useAuth()
        const { push } = useRouter()
        const [message, setMessage] = useState(user.mensagem || '')

        const saveMessage = async () => {
            await setUser({ ...user, mensagem: message })
            push('/mensagem/midia')
        }

        return (
            <S.WrapperLogin>
                <div>
                    <Logo size="normal" />
                </div>
                <section>
                    <Title size="normal">Cadastrar mensagem</Title>
                    <TextArea
                        value={message}
                        placeholder="Escreva aqui sua mensagem..."
                        aria-label="campo de inserção de texto"
                        onChange={(e: React.FormEvent<HTMLInputElement>) =>
                            setMessage(e.currentTarget.value)
                        }
                    />
                    <Button onClick={() => saveMessage()}>Avançar</Button>
                </section>
            </S.WrapperLogin>
        )
    }

    return (
        <TemplateWithCarrouselIntroduce
            animationName="paper"
            messages={messages}
            Component={MessageComponent}
            carrouselMinor
        />
    )
}
