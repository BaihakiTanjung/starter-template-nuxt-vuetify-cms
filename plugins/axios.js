/* eslint-disable require-await */
/* eslint-disable camelcase */

export default async ({ $axios, redirect, store, route, error }) => {
  $axios.setBaseURL(process.env.BASE_URL)

  $axios.onRequest((config) => {
    store.commit('setLoading', true)
    const access_token = store.getters['user/access_token']
    if (access_token) {
      config.headers.common.Authorization = `Bearer ${access_token}`
    }
  })

  $axios.onResponse((response) => {
    store.commit('setLoading', false)
  })

  $axios.onError((err) => {
    const code = parseInt(err.response && err.response.status)
    if (code === 401) {
      redirect('/login')
    }

    if (code === 403 || code === 404 || code === 500) {
      error({ statusCode: code, message: err.response.statusText })
    }

    store.commit('setLoading', false)

    return error.response
  })
}
