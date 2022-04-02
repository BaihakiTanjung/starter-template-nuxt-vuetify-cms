import Api from '@/api/Api.js'

class FetchServices {
  async getFetch(payload) {
    return await Api.doGet('test', payload)
      .then((res) => res)
      .catch((err) => err)
  }
}

export default new FetchServices()
