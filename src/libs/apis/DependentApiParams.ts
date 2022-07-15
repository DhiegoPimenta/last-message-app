import { IDependentDTO } from 'libs/IDepedent'
import { IUser } from 'libs/IUser'

export interface IDependentApiParams {
    dependent: IDependentDTO
    user: IUser
}
export interface DependentApiParams {
    create: (user: IUser) => Promise<any> //TODO tipar
}
