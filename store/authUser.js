export const strict = false

export const state = () => ({
  userId: null,
  // user: JSON.parse(localStorage.getItem('user')) || '',
  token: '',
  status: '',
  isAuthenticated: false,
  error: ''
})

export const mutations = {
  SET_AUTH(state, payload) {
    state.token = payload.token
    state.userId = payload.userId
    state.user = payload.user
    state.isAuthenticated = true
    state.status = 'success'
  },
  SET_TOKEN(state, payload) {
    state.token = payload
  },
  AUTH_LOGOUT(state) {
    state.token = ''
    state.userId = null
    state.user = {}
    state.isAuthenticated = false
  }
}

export const actions = {
  AUTH_REQUEST(context, payload) {
    return new Promise((resolve, reject) => {
      this.$auth
        .loginWith('local', {
          data: payload
        })
        .then((response) => {
          if (response.status === 'success') {
            // return
            resolve(response)
          } else {
            // return
            resolve(response)
          }
        })
        .catch((error) => {
          // return
          reject(error)
          throw error
        })
    })
  },
  AUTH_LOGOUT(context) {
    context.commit('AUTH_LOGOUT')
  }
}

export const getters = {
  token: (state) => state.token,
  userId: (state) => state.userId,
  user: (state) => state.user,
  isAuthenticated: (state) => state.token !== null,
  status: (state) => state.status
}
