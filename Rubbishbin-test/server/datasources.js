'use strict'
require('dotenv').config()

module.exports = getDB();

function getDB() {
  const db = {
    mlab: {
      name: 'mlab',
      connector: 'mongodb',
      hostname: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: 'felipeprueba'
    }
  }
  return db;
}