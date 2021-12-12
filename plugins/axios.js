/* eslint-disable require-await */
/* eslint-disable camelcase */
// import { BASE_URL } from '@/api/apiUrl'

export default async ({ $axios, redirect, store, route }) => {
  // $axios.setBaseURL(BASE_URL)

  $axios.onRequest((config) => {
    const access_token = store.getters['user/access_token']
    if (access_token) {
      config.headers.common.Authorization = `Bearer ${access_token}`
    }
  })

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 401 && !route.path.match(/^\/auth/)) {
      redirect('/auth/login')
    }
    return error.response
  })
}
