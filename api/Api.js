/*
 * Wrapper Axios Methods Api
 */

import { PREFIX } from '~/api/apiUrl.js'

class Api {
  constructor($axios) {
    this.$axios = $axios
  }

  async doGet(url, params) {
    return await this.$axios
      .get(PREFIX + url, params)
      .then((res) => res.data)
      .catch((err) => err)
  }

  async doPost(url, params) {
    return await this.$axios
      .post(PREFIX + url, params)
      .then((res) => res.data)
      .catch((error) => {
        throw error
      })
  }

  async doPut(url, params) {
    return await this.$axios
      .put(PREFIX + url, params)
      .then((res) => res.data)
      .catch((error) => {
        throw error
      })
  }

  async doDelete(url, params) {
    return await this.$axios
      .delete(PREFIX + url, params)
      .then((res) => res.data)
      .catch((error) => {
        throw error
      })
  }

  async doGetBlob(url, params) {
    return await this.$axios
      .post(PREFIX + url, params, { responseType: 'blob' })
      .then((res) => res.data)
      .catch((error) => {
        throw error
      })
  }

  async doPostMultipart(url, params) {
    return await this.$axios
      .post(PREFIX + url, params, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => res.data)
      .catch((error) => {
        throw error
      })
  }
}

export default new Api()
