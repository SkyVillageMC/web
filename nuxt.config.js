export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'SkyVillage',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Egy nagyon profi minecraft szerver.' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: `og:title`, content: `SkyVillage` },
      { name: `og:type`, content: `website` },
      { name: `og:image`, content: `https://skyvillage.hu/logo-large.webp`},
      { name: `og:url`, content: `https://skyvillage.hu` },
      { name: `theme-color`, content: `#ffdd19` }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/auth-next',
    '@nuxtjs/recaptcha'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://api.skyvillage.hu/',
  },

  recaptcha: {
    siteKey: process.env.CAPTCHA_SITE_KEY,
    version: 3
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'hu',
      name: 'SkyVillage'
    }
  },

  auth: {
    redirect: {
      login: '/auth/login',
      logout: '/',
      home: '/dashboard'
    },
    strategies: {
      local: {
        scheme: 'refresh',
        token: {
          property: 'accessToken',
          maxAge: 1800,
          global: true,
          type: 'Bearer'
        },
        refreshToken: {
          property: 'refreshToken',
          data: 'refreshToken',
          maxAge: 60 * 60 * 24 * 30
        },
        user: {
          property: '',
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

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  publicRuntimeConfig: {
    recaptcha: {
      siteKey: process.env.CAPTCHA_SITE_KEY,
      version: 3
    },
  }
}
