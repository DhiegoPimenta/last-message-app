import Button from 'components/Atoms/Button'
import Input from 'components/Atoms/Input'
import LinkTo from 'components/Atoms/Link'
import Logo from 'components/Atoms/Logo'
import Title from 'components/Atoms/Title'
import { useAuth } from 'contexts/auth/auth.provider'
import { Formik } from 'formik'
import { ILogin } from 'libs/apis/UserApiParams'
import TemplateWithCarrouselIntroduce from 'templates/TemplateWithCarrouselIntroduce'
import * as S from './styles'
import * as Yup from 'yup'

import { toast } from 'react-toastify'

export default function LoginPage() {
    const messages = [
        'O <strong>last message</strong> é serviço que entrega sua mensagem aos seus queridos',
        'message2',
        'message3',
    ]
    const { login } = useAuth()

    const initialValues: ILogin = {
        email: '',
        password: '',
    }

    const onSubmit = async ({ email, password }: ILogin) => {
        await login({ email, password }).then(() => {
            toast.success('Seja bem vindo!')
        })
    }

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Preencha um e-mail válido')
            .required('Digite o e-mail'),
        password: Yup.string().required('Digite a senha'),
    })

    const LoginComponent = () => {
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
                            <Title size="normal">Acessar conta</Title>
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
                                Entrar
                            </Button>
                        </form>
                    )}
                </Formik>
                <LinkTo url="/cadastrar">Cadastrar-se</LinkTo>
            </S.WrapperLogin>
        )
    }

    return (
        <TemplateWithCarrouselIntroduce
            animationName="woman"
            messages={messages}
            Component={LoginComponent}
        />
    )
}
