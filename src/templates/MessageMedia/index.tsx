import Button from 'components/Atoms/Button'
import InputFile from 'components/Atoms/InputFile'
import Logo from 'components/Atoms/Logo'
import Title from 'components/Atoms/Title'
import { useAuth } from 'contexts/auth/auth.provider'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { toast } from 'react-toastify'
import UserApi from 'services/apis/UserApi'
import TemplateWithCarrouselIntroduce from 'templates/TemplateWithCarrouselIntroduce'
import * as S from './styles'

export default function MessageMedia() {
    const messages = [
        'O <strong>last message</strong> é serviço que entrega sua mensagem aos seus queridos',
        'message2',
        'message3',
    ]

    const MessageMediaComponent = () => {
        const { user, saveUser } = useAuth()
        const { replace } = useRouter()
        const [thumbnail, setThumbnail] = useState<any>(null)

        const sendMedia = async () => {
            const url = await UserApi.sendMedia(thumbnail, user.id)
            saveUser({ ...user, arquivo: url })
            toast.success('Arquivo enviado com sucesso')
            replace('/inicio')
        }

        return (
            <S.WrapperLogin>
                <div>
                    <Logo size="normal" />
                </div>
                <section>
                    <Title size="normal">Cadastrar mensagem</Title>
                    <InputFile
                        setThumbnail={setThumbnail}
                        thumbnail={thumbnail}
                    />
                    <Button onClick={() => sendMedia()}>Salvar</Button>
                </section>
            </S.WrapperLogin>
        )
    }

    return (
        <TemplateWithCarrouselIntroduce
            animationName="paper"
            messages={messages}
            Component={MessageMediaComponent}
            carrouselMinor
        />
    )
}
