import Icon from 'components/Atoms/Icon'
import LinkTo from 'components/Atoms/Link'
import Title from 'components/Atoms/Title'
import { useAuth } from 'contexts/auth/auth.provider'
import { toast } from 'react-toastify'
import UserApi from 'services/apis/UserApi'
import TemplateWithCarrouselIntroduce from 'templates/TemplateWithCarrouselIntroduce'
import * as S from './styles'

export default function Home() {
    const { user } = useAuth()

    const messages = [
        'O <strong>last message</strong> é serviço que entrega sua mensagem aos seus queridos',
        'message2',
        'message3',
    ]

    const testMessage = async () => {
        await UserApi.testMessage(user.id).then(() => {
            toast.success(`E-mail de teste enviado para ${user.email}`)
        })
    }

    const HomeComponent = () => {
        return (
            <S.WrapperLogin>
                <Title size="large">Last Message</Title>

                <section>
                    <LinkTo url="/dependentes/lista" noUnderline>
                        <S.ButtonHome>
                            <Icon iconName="user" size="large" />
                            <p>Meus Dependentes</p>
                        </S.ButtonHome>
                    </LinkTo>
                    <LinkTo url="/mensagem" noUnderline>
                        <S.ButtonHome>
                            <Icon iconName="mail" size="large" />
                            <p>Minha Mensagem</p>
                        </S.ButtonHome>
                    </LinkTo>

                    <S.ButtonHome onClick={testMessage}>
                        <Icon iconName="send" size="large" />
                        <p>Testar Mensagem</p>
                    </S.ButtonHome>
                </section>
            </S.WrapperLogin>
        )
    }

    return (
        <TemplateWithCarrouselIntroduce
            animationName="logo"
            messages={messages}
            Component={HomeComponent}
            carrouselMinor
        />
    )
}
