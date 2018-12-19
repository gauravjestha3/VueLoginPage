'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_URL: "'http://13.127.228.134:9000'",
  LIV_FIN_GATEWAY: '"gateway-0.0.1-SNAPSHOT"',
  PORT: 8080
})
