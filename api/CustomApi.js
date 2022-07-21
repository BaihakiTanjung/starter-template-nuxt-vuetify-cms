/*
 * Wrapper Axios Methods Custom Api
 */

import axios from 'axios'
import { PREFIX } from '~/api/ApiUrl.js'

class CustomApi {
  async doGet(url, params) {
    return await axios
      .get(url + PREFIX, params)
      .then((res) => res.data)
      .catch((err) => err)
  }

  async doPost(url, params) {
    return await axios
      .post(url + PREFIX, params)
      .then((res) => res.data)
      .catch((error) => {
        throw error
      })
  }

  async doPut(url, params) {
    return await axios
      .put(url + PREFIX, params)
      .then((res) => res.data)
      .catch((error) => {
        throw error
      })
  }

  async doDelete(url, params) {
    return await axios
      .delete(url + PREFIX, params)
      .then((res) => res.data)
      .catch((error) => {
        throw error
      })
  }

  async doGetBlob(url, params) {
    return await axios
      .post(url + PREFIX, params, { responseType: 'blob' })
      .then((res) => res.data)
      .catch((error) => {
        throw error
      })
  }

  async doPostMultipart(url, params) {
    return await axios
      .post(url + PREFIX, params, {
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

export default new CustomApi()
