import Api from '~/api/api'

class FetchServices {
  async getFetch(payload) {
    return await Api.doGet('', payload)
      .then((res) => res)
      .catch((err) => err)
  }
}

export default new FetchServices()
