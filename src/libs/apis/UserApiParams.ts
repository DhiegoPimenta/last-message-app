import { IUser } from 'libs/IUser'

export interface ILogin {
    email: string
    password: string
}

export interface ISignUp {
    name: string
    document: string
    email: string
    password: string
}

export interface UserApiParams {
    login: (data: ILogin) => Promise<any> //TODO tipar
    create: (data: ISignUp) => Promise<any>
    update: (user: IUser) => Promise<any>
    sendMedia: (user: IUser, user_id: number) => Promise<any>
    testMessage: (user_id: number) => Promise<any>
}
