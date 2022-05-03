import Api from '@/api/api.js'

export default ({ $axios }, inject) => {
  Api.$axios = $axios
  inject('Api', Api)
}
