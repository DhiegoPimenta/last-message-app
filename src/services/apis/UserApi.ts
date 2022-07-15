import { ISignUp, UserApiParams } from 'libs/apis/UserApiParams'
import { IUser } from 'libs/IUser'
import { toast } from 'react-toastify'

import { AxiosInstance } from '../api'

const UserApi: UserApiParams = {
    login: async ({ email, password }): Promise<any> => {
        return AxiosInstance.post<IUser>(`/autenticar-usuario`, {
            email,
            senha: password,
        }).catch(() => {
            toast.error('Usuário ou senha inválidos')
            throw false
        })
    },
    testMessage: async (user_id: number): Promise<any> => {
        return AxiosInstance.get<IUser>(`/enviar-email/${user_id}`).catch(
            () => {
                toast.error('Usuário ou senha inválidos')
                throw false
            }
        )
    },
    create: async (data: ISignUp): Promise<any> => {
        const user = {
            cpf: data.document,
            email: data.email,
            nome: data.name.split(' ').shift(),
            senha: data.password,
            sobrenome: data.name.split(' ').pop(),
        }
        return AxiosInstance.post(`/registrar-usuario`, user).catch(() => {
            toast.error('Erro ao cadastrar usuário')
            throw false
        })
    },
    update: async (user: IUser): Promise<any> => {
        return AxiosInstance.put(`/atualizar-dados-usuario`, { ...user }).catch(
            () => {
                toast.error('Erro ao atualizar usuário')
                throw false
            }
        )
    },
    sendMedia: async (thumbnail: any, user_id: number): Promise<any> => {
        const formData = new FormData()
        formData.append('multipartFile', thumbnail)
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            },
        }

        return AxiosInstance.post(
            `/upload/usuario?id_usuario=${user_id}`,
            formData,
            config
        )
            .then((res) => res.data)
            .catch(() => {
                toast.error('Erro ao subir imagem')
                throw false
            })
    },
}

export default UserApi
