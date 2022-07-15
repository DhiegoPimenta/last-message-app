import axios, {
    AxiosError,
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse,
} from 'axios'
import { TOKEN_ALIAS } from 'constants/userVariables'
import { GetServerSidePropsContext } from 'next'
import router from 'next/router'
import { destroyCookie, parseCookies } from 'nookies'
import { ParsedUrlQuery } from 'querystring'
import { toast } from 'react-toastify'

function logoutUser(): void {
    router.replace('/')
    toast.warning('Sessão Expirada')
}

export function getAPIClient(
    ctx?: GetServerSidePropsContext<ParsedUrlQuery>
): AxiosInstance {
    const { [TOKEN_ALIAS]: lastMessageAuth } = parseCookies(ctx)
    let token: string | undefined = lastMessageAuth

    const AxiosInstance = axios.create({
        baseURL: process.env.NEXT_PUBLIC_API_URL,
    })

    AxiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
        console.log(config)
        if (config.headers!['content-type'] !== 'multipart/form-data') {
            if (token) {
                config.data = { ...config.data, token }
            }
        }

        return config
    })

    AxiosInstance.interceptors.response.use(
        (response: AxiosResponse) => {
            return response
        },
        (error: AxiosError) => {
            if (error.response) {
                const { status } = error.response
                if (token && status === 401) {
                    token = undefined
                    destroyCookie(undefined, TOKEN_ALIAS)
                    return logoutUser()
                }
            }
            return Promise.reject(error)
        }
    )

    return AxiosInstance
}
