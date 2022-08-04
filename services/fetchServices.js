import Api from '~/api/Api.js'

class FetchServices {
  async GetFetch({ request }) {
    const res = await Api.doGet(``, request)
    console.debug('GET FETCH', res)
    return res
  }
}

export default new FetchServices()
