'use strict'

require('dotenv').config()

module.exports = {
  mongodb: {
    connector: 'mongodb',
    hostname: process.env.DB_HOST,
    port: process.env.DB_PORT || 27017,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'felipeprueba'
  }
}