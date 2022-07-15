import Button from 'components/Atoms/Button'
import Input from 'components/Atoms/Input'
import LinkTo from 'components/Atoms/Link'
import Logo from 'components/Atoms/Logo'
import Title from 'components/Atoms/Title'
import TemplateWithCarrouselIntroduce from 'templates/TemplateWithCarrouselIntroduce'
import * as S from './styles'

import { useAuth } from 'contexts/auth/auth.provider'
import { Formik } from 'formik'
import { ISignUp } from 'libs/apis/UserApiParams'
import * as Yup from 'yup'

import { toast } from 'react-toastify'
import UserApi from 'services/apis/UserApi'
import { setCookie } from 'nookies'
import { USER_COOKIE } from 'constants/userVariables'
import { useRouter } from 'next/router'

export default function SignUp() {
    const { setUser } = useAuth()
    const { replace } = useRouter()

    const messages = [
        'O <strong>last message</strong> é serviço que entrega sua mensagem aos seus queridos',
        'message2',
        'message3',
    ]

    const initialValues: ISignUp = {
        name: '',
        document: '',
        email: '',
        password: '',
    }

    const onSubmit = async (data: ISignUp) => {
        await UserApi.create(data)
            .then(({ data }) => {
                setUser(data)
                setCookie(undefined, USER_COOKIE, JSON.stringify(data), {
                    maxAge: 60 * 60 * 2, // 2 hours
                })
                replace('/inicio')
            })
            .catch(() => {
                toast.error('Ocorreu um erro ao atualizar o usuário')
            })
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Digite o nome'),
        document: Yup.string().required('Digite o documento'),
        email: Yup.string()
            .email('Preencha um e-mail válido')
            .required('Digite o e-mail'),
        password: Yup.string().required('Digite a senha'),
    })

    const SignUpComponent = () => {
        return (
            <S.WrapperLogin>
                <div>
                    <Logo size="normal" />
                </div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {({
                        handleSubmit,
                        setFieldValue,
                        isSubmitting,
                        touched,
                        errors,
                        values,
                    }) => (
                        <form onSubmit={handleSubmit}>
                            <Title size="normal">Cadastrar conta</Title>
                            <Input
                                iconName="user"
                                placeholder="Nome"
                                value={values.name}
                                handleChange={(value) =>
                                    setFieldValue('name', value)
                                }
                                errorMessage={touched.name ? errors.name : ''}
                            />
                            <Input
                                iconName="document"
                                placeholder="CPF"
                                value={values.document}
                                handleChange={(value) =>
                                    setFieldValue('document', value)
                                }
                                errorMessage={
                                    touched.document ? errors.document : ''
                                }
                            />
                            <Input
                                iconName="mail"
                                placeholder="E-mail"
                                inputType="email"
                                value={values.email}
                                handleChange={(value) =>
                                    setFieldValue('email', value)
                                }
                                errorMessage={touched.email ? errors.email : ''}
                            />
                            <Input
                                iconName="unlock"
                                placeholder="Senha"
                                inputType="password"
                                value={values.password}
                                handleChange={(value) =>
                                    setFieldValue('password', value)
                                }
                                errorMessage={
                                    touched.password ? errors.password : ''
                                }
                            />
                            <Button type="submit" isLoading={isSubmitting}>
                                Cadastrar
                            </Button>
                        </form>
                    )}
                </Formik>
                <LinkTo url="/">Já tenho conta</LinkTo>
            </S.WrapperLogin>
        )
    }

    return (
        <TemplateWithCarrouselIntroduce
            animationName="woman"
            messages={messages}
            Component={SignUpComponent}
        />
    )
}
