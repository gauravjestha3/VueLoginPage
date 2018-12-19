import URLS from '../Common/api.js'

export default {
  login: (http, params) => {
    return http.post(URLS.admin.login, params)
  }
}
