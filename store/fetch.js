import fetchServices from '~/services/fetchServices'

export const state = () => ({
  items: '',
})

export const getters = {
  items: (state) => state.items,
}

export const mutations = {
  SET_ITEMS(state, items) {
    state.items = items
  },
}

export const actions = {
  getFetch(context, payload) {
    return new Promise((resolve, reject) => {
      fetchServices
        .getFetch(payload)
        .then((res) => {
          context.commit('SET_ITEMS', res)
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
}
