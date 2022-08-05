// import colors from 'vuetify/es5/util/colors'
// const nodeEnv = process.env.NODE_ENV
const baseUrl = process.env.BASE_URL || 'http://localhost:3000'
const appTitle = process.env.APP_TITLE

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: appTitle,
    htmlAttrs: {
      lang: 'id',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/main.scss', '@/assets/scss/colors.scss'],

  styleResources: {
    scss: ['./assets/scss/*.scss'],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/axios.js',
    '@/plugins/api.js',
    '@/plugins/vee-validate.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Loading
  loading: '~/components/LoadingBar.vue',

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/composition-api/module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources',
  ],

  target: 'spa',

  auth: {
    strategies: {
      local: {
        token: {
          property: 'content.access_token',
          global: true,
          required: true,
          type: 'Bearer',
        },
        user: {
          property: false, // here should be `false`, as you defined in user endpoint `propertyName`
          // autoFetch: true
        },
        endpoints: {
          login: {
            url: '/api/login',
            method: 'post',
            propertyName: false,
          },
          user: {
            url: '/api/auth/user',
            method: 'get',
            propertyName: false,
          },
          logout: {
            url: '/api/auth/logout',
            method: 'post',
            propertyName: false,
          },
        },
      },
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    headers: {
      common: {
        Accept: 'application/json',
      },
    },
    // credentials: true,
    baseURL: baseUrl,
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/scss/variables.scss'],
    treeShake: true,
    theme: {
      dark: false,
      options: { customProperties: true },
      themes: {
        light: {
          primary: '#1869ac',
          secondary: '#00DC82',
          accent: '#00bcd4',
          error: '#f44336',
          warning: '#ffc107',
          info: '#009688',
          success: '#4caf50',
        },
        dark: {
          primary: '#1869ac',
          secondary: '#00DC82',
          accent: '#00bcd4',
          error: '#f44336',
          warning: '#ffc107',
          info: '#009688',
          success: '#4caf50',
        },
      },
    },
  },

  transition: {
    name: 'page',
    mode: 'out-in',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vee-validate'],
  },
  extends: ['@nuxtjs'],
}
