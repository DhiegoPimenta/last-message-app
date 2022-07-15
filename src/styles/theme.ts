export default {
    grid: {
        container: '130rem',
        gutter: '3.2rem',
    },
    border: {
        radius: '1rem',
    },
    font: {
        family: `Poppins, Ubuntu, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,
        light: 300,
        normal: 400,
        bold: 600,
        extrabold: 800,
        sizes: {
            xsmall: '1.4rem',
            small: '1.8rem',
            medium: '2.4rem',
            large: '3.2rem',
        },
    },
    colors: {
        primary: '#64CBC5',
        secondary: '#0030FF',
        terciary: '#A0DFDC',
        white: '#FFFFFF',
        gray: '#CECECE',
        danger: '#FBA9B0',
        black: '#444444',
        overlay: 'rgba(0, 0, 0, 0.3)',
    },
    spacings: {
        xxsmall: '0.8rem',
        xsmall: '1.6rem',
        small: '2.4rem',
        medium: '3.2rem',
        large: '4.0rem',
        xlarge: '4.8rem',
        xxlarge: '5.6rem',
    },
    layers: {
        base: 10,
        menu: 20,
        overlay: 30,
        modal: 40,
        alwaysOnTop: 50,
    },
    transition: {
        default: '0.3s ease-in-out',
        fast: '0.1s ease-in-out',
    },
} as const
