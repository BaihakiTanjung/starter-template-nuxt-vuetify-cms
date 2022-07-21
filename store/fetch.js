import fetchServices from '~/services/fetchServices'
import { showFailedPopup } from '@/helpers/Utils'

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
  async getFetch(context, payload) {
    try {
      const res = await fetchServices.GetFetch({})
      context.commit('SET_ITEMS', res)
      return res
    } catch (error) {
      showFailedPopup({ msg: error })
      console.error(error)
      throw error
    }
  },
}
