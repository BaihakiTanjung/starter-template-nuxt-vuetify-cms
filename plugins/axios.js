export default ({ $axios, redirect, store, route, error }) => {
  $axios.setBaseURL(process.env.BASE_URL)

  $axios.onRequest((config) => {
    store.commit('SET_LOADING', true)
    const accessToken = store.getters['user/access_token']
    if (accessToken) {
      config.headers.common.Authorization = `Bearer ${accessToken}`
    }
  })

  $axios.onResponse((response) => {
    store.commit('SET_LOADING', false)
  })

  $axios.onError((err) => {
    const code = parseInt(err.response && err.response.status)
    if (code === 401) {
      redirect('/login')
    }

    if (code === 403 || code === 404 || code === 500) {
      error({ statusCode: code, message: err.response.statusText })
    }

    store.commit('SET_LOADING', false)

    return error.response
  })
}
