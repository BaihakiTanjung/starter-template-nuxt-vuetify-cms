// export const actions = {
//     async nuxtClientInit({ commit, dispatch }) {
//       const access_token = localStorage.getItem('access_token')

//       if (access_token) {
//         commit('user/setAccessToken', access_token)
//       }
//     }
// }

// import ResponseHelper from '@/helpers/ResponseHelper'
// import CustomError from '@/helpers/CustomError'

export const state = () => ({
  pageTitle: '',
  isLoading: false
})

export const getters = {
  pageTitle: (state) => state.pageTitle,
  isLoading: (state) => state.isLoading
}

export const mutations = {
  setPageTitle(state, title) {
    state.pageTitle = title
  },
  setLoading(state, isLoading) {
    state.isLoading = isLoading
  }
}

export const actions = {}
