import Api from '@/api/Api.js'

export default ({ $axios }, inject) => {
  Api.$axios = $axios
  inject('Api', Api)
}
