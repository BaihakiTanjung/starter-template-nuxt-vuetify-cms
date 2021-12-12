// import colors from 'vuetify/es5/util/colors'
const development = process.env.NODE_ENV !== 'production'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Sitama PKP',
    htmlAttrs: {
      lang: 'id'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/axios.js', '@/plugins/services.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Loading
  loading: '~/components/LoadingBar.vue',

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/dotenv'
  ],

  auth: {
    strategies: {
      local: {
        token: {
          property: 'content.access_token',
          global: true,
          required: true,
          type: 'Bearer'
        },
        user: {
          property: false // here should be `false`, as you defined in user endpoint `propertyName`
          // autoFetch: true
        },
        endpoints: {
          login: {
            url: '/api/login',
            method: 'post',
            propertyName: false
          },
          user: {
            url: '/api/auth/user',
            method: 'get',
            propertyName: false
          },
          logout: {
            url: '/api/auth/logout',
            method: 'post',
            propertyName: false
          }
        }
      }
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    headers: {
      common: {
        Accept: 'application/json'
      }
    },
    // credentials: true,
    baseURL: development
      ? 'http://localhost:8005'
      : 'https://services-vehiclo.sitama.co.id'
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/scss/variables.scss'],
    treeShake: true,
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#1869ac',
          secondary: '#424242',
          accent: '#82B1FF',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107'
        },
        dark: {
          primary: '#1869ac',
          secondary: '#424242',
          accent: '#82B1FF',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107'
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  extends: ['@nuxtjs']
}
