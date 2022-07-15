import * as Yup from 'yup'

export const YuLoginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Por favor insira um e-mail válido')
        .required('Por favor, preencha o CEP'),
    password: Yup.string().required('Por favor, preencha a senha'),
})
