import userServices from '@/api/services/userServices'

export default ($axios, inject) => {
  inject('userServices', userServices($axios))
}
