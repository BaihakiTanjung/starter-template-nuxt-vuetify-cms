import CustomApi from '@/api/CustomApi'
const baseUrlSecond = process.env.BASE_URL_SECOND

class FetchServices {
  async getFetch(payload) {
    return await CustomApi.doGet(baseUrlSecond, payload)
      .then((res) => res)
      .catch((err) => err)
  }
}

export default new FetchServices()
