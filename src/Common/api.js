import config from './Config'
const URLS = {
  admin: {
    login: `${config.baseURL}/${config.livFinGateway}/api/authenticate`
  }
}
export default URLS
