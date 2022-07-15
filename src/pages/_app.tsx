import AuthProvider from 'contexts/auth/auth.provider'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

function App({ Component, pageProps }: AppProps) {
    return (
        <AuthProvider>
            <ToastContainer />
            <ThemeProvider theme={theme}>
                <Head>
                    <title>Last Message</title>
                    <link
                        rel="shortcut icon"
                        href="/img/logo.png"
                        type="image/x-icon"
                    />
                    <link rel="manifest" href="/manifest.json" />
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com"
                        crossOrigin="true"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;800&display=swap"
                        rel="stylesheet"
                    />
                    <meta name="description" content="Last Message" />
                </Head>
                <GlobalStyles />
                <Component {...pageProps} />
            </ThemeProvider>
        </AuthProvider>
    )
}

export default App
