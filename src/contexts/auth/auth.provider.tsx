import { ILogin } from 'libs/apis/UserApiParams'
import { IUser } from 'libs/IUser'

import { useRouter } from 'next/dist/client/router'
import { destroyCookie, parseCookies, setCookie } from 'nookies'
import React, {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
} from 'react'
import { toast } from 'react-toastify'
import { TOKEN_ALIAS, USER_COOKIE } from '../../constants/userVariables'

import UserApi from '../../services/apis/UserApi'

export interface IAuthContext {
    isAuthenticated: boolean
    logout: (expired?: boolean) => Promise<void>
    login: (data: ILogin) => Promise<any>
    getUser: () => Promise<IUser>
    saveUser: (user: IUser) => Promise<void>
    user: IUser
    setUser: (user: IUser) => void
}

export const AuthContext = createContext({} as IAuthContext)

const AuthProvider: React.FC = ({ children }) => {
    const { replace } = useRouter()

    const { [TOKEN_ALIAS]: token } = parseCookies()
    const [isAuthenticated, setAuthState] = useState<boolean>(!!token)

    const [user, setUser] = useState({} as IUser)

    useEffect(() => {
        setAuthState(!!token)
        const { [USER_COOKIE]: data } = parseCookies()

        if (data) {
            const user = JSON.parse(data)
            setUser(user as IUser)
        }
    }, [token])

    useEffect(() => {
        setUser(getUser())
    }, [])

    const getUser = () => {
        const { [USER_COOKIE]: data } = parseCookies()
        return data ? JSON.parse(data) : ({} as IUser)
    }

    const saveUserSession = useCallback(
        async (token: string) => {
            replace('/inicio')
            setCookie(undefined, TOKEN_ALIAS, token, {
                maxAge: 60 * 60 * 2, // 2 hours
            })
        },
        [replace]
    )

    const saveUser = async (user: IUser) => {
        await UserApi.update(user)
            .then(({ data }) => {
                setUser(data)
                setCookie(undefined, USER_COOKIE, JSON.stringify(data), {
                    maxAge: 60 * 60 * 2, // 2 hours
                })
            })
            .catch(() => {
                toast.error('Ocorreu um erro ao atualizar o usuário')
            })
    }

    const login = useCallback(async ({ email, password }: ILogin) => {
        return await UserApi.login({ email, password }).then(async (user) => {
            const { token } = user.data

            delete user.data.token
            delete user.data.senha

            saveUser(user.data)
            return saveUserSession(token)
        })
    }, [])

    const logout = useCallback(async () => {
        destroyCookie(undefined, TOKEN_ALIAS)

        await replace('/')
    }, [replace])

    return (
        <AuthContext.Provider
            value={{
                login,
                isAuthenticated,
                logout,
                getUser,
                user,
                saveUser,
                setUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = (): IAuthContext => useContext(AuthContext)

export default AuthProvider
