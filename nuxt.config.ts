// https://nuxt.com/docs/api/configuration/nuxt-config
// noinspection TypeScriptUnresolvedVariable
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt-alt/auth',
        '@nuxt-alt/http',
        '@pinia/nuxt',
        '@kevinmarrec/nuxt-pwa',
        '@nuxtjs/turnstile'
    ],
    turnstile: {
        siteKey: '0x4AAAAAAADgQYWBwIt4JROS',
    },

    runtimeConfig: {
        turnstile: {
            secretKey: process.env.NUXT_TURNSTILE_SECRET_KEY || '',
        },
    },
    pwa: {
        manifest: {
            lang: 'hu',
            name: 'SkyVillage',
            short_name: 'SkyVillage',
            description: 'Egy új magyar minecraft szerver (lesz)',
            display: 'standalone',
            start_url: 'https://skyvillage.hu/',
            theme_color: '#ffdd19',
            background_color: '#2f3640',
            icons: [{
                src: '/icon.png',
                type: 'image/png',
                sizes: '512x512 256x256',
                purpose: 'any'
            }]
        }
    },
    auth: {
        redirect: {
            login: '/auth/login',
            logout: '/',
            home: '/dashboard',
            callback: '/'
        },
        strategies: {
            local: {
                scheme: 'refresh',
                token: {
                    property: 'access_token',
                    maxAge: 1800,
                    global: true,
                    // type: 'Bearer'
                },
                refreshToken: {
                    property: 'refresh_token',
                    data: 'refresh_token',
                    maxAge: 60 * 60 * 24 * 30
                },
                user: {
                    property: 'user',
                    autoFetch: true
                },
                endpoints: {
                    login: { url: '/api/auth/login', method: 'post' },
                    refresh: { url: '/api/auth/refresh', method: 'post' },
                    user: { url: '/api/user/me', method: 'get' },
                    logout: { url: '/api/auth/logout', method: 'post' }
                },
                // autoLogout: false
            }
        }
    },
    router: {
        middleware: ['auth']
    }
})
