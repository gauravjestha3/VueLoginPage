import {
  AES,
  enc,
  SHA256
} from 'crypto-js'
import globals from './global.js'
export default {
  getToken () {
    const data = localStorage.getItem('token')
    if (data === null) {
      return ''
    }
    return AES.decrypt(data, globals.encryption.key).toString(enc.Utf8)
  },

  setToken (token) {
    localStorage.setItem('token', AES.encrypt(token, globals.encryption.key).toString())
  },

  sha256Hashing (data) {
    return SHA256(data).toString(enc.Base64)
  }
}
