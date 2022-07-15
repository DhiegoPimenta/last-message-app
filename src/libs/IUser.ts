import { IDependent } from './IDepedent'

export interface IUser {
    id: number
    data_nascimento: string
    dependentes: IDependent[]
    mensagem: string
    cpf: string
    arquivo: any
    nome: string
    sobrenome: string
    email: string
    status: string
}
