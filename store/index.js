export const state = () => ({
  pageTitle: '',
  isLoading: false,
})

export const getters = {
  pageTitle: (state) => state.pageTitle,
  isLoading: (state) => state.isLoading,
}

export const mutations = {
  SET_PAGE_TITLE(state, title) {
    state.pageTitle = title
  },
  SET_LOADING(state, isLoading) {
    state.isLoading = isLoading
  },
}

export const actions = {}
