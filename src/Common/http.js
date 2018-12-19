import Vue from 'vue'
import axios from 'axios'
import config from './Config'
import tokenApi from './token'
import utility from '../Common/utility'
const http = axios.create({
  baseURL: config.baseURL,
  timeout: config.timeout
})
const checkToken = (url) => { // eslint-disable-line
  const requireToken = tokenApi.find(item => item === url)
  return requireToken
}
http.interceptors.request.use((request) => {
  if (!checkToken(request.url)) {
    request.headers.Authorization = utility.getToken()
  }
  return request
}, error => Promise.reject(error))
http.interceptors.response.use((response) => {
  if (response.status === 200 && response.headers.authorization) {
    utility.setToken(response.headers.authorization)
  }
  return response
}, (error) => {
  if (error.message === 'Network Error') {
    const networkError = {
      errorCodeList: ['NETWORK']
    }
    return Promise.reject(networkError)
  } else if (error.message === `timeout of ${config.timeout}ms exceeded`) {
    const timeoutError = {
      errorCodeList: ['TIMEOUT']
    }
    return Promise.reject(timeoutError)
  }
  return Promise.reject(error.response.data)
})

Vue.prototype.$http = http
