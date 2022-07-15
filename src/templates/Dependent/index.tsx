import Button from 'components/Atoms/Button'
import Input from 'components/Atoms/Input'
import Logo from 'components/Atoms/Logo'
import Title from 'components/Atoms/Title'
import { Formik } from 'formik'
import { useCallback } from 'react'
import TemplateWithCarrouselIntroduce from 'templates/TemplateWithCarrouselIntroduce'
import * as S from './styles'
import * as Yup from 'yup'

import { useAuth } from 'contexts/auth/auth.provider'

import { useRouter } from 'next/router'

export default function Dependent() {
    const messages = [
        'O <strong>last message</strong> é serviço que entrega sua mensagem aos seus queridos',
        'message2',
        'message3',
    ]
    const { user, saveUser } = useAuth()
    const { push } = useRouter()

    const DependentComponent = () => {
        const initialValues = {
            name: '',
            email: '',
            phone: '',
        }

        const onSubmit = useCallback(async (data: typeof initialValues) => {
            user.dependentes.push({
                nome_dependente: data.name,
                email: data.email,
                celular: data.phone,
            })
            await saveUser(user).then(() => push('dependentes/lista'))
        }, [])

        const validationSchema = Yup.object().shape({
            name: Yup.string().required('Por favor, preencha os dígitos'),
            email: Yup.string().required('Por favor, preencha os dígitos'),
            phone: Yup.string().required('Por favor, preencha os dígitos'),
        })

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
                            <Title size="normal">Cadastro de dependente</Title>
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
                                iconName="phone"
                                placeholder="Telefone"
                                inputType="phone"
                                value={values.phone}
                                handleChange={(value) =>
                                    setFieldValue('phone', value)
                                }
                                errorMessage={touched.phone ? errors.phone : ''}
                            />
                            <Button type="submit" isLoading={isSubmitting}>
                                Cadastrar
                            </Button>
                        </form>
                    )}
                </Formik>
            </S.WrapperLogin>
        )
    }

    return (
        <TemplateWithCarrouselIntroduce
            animationName="pair"
            messages={messages}
            Component={DependentComponent}
            carrouselFirst
        />
    )
}
