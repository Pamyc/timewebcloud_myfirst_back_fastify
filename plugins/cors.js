// app-example-fastify-master/plugins/cors.js

'use strict'

const fp = require('fastify-plugin')
const cors = require('@fastify/cors')

module.exports = fp(async function (fastify, opts) {
  fastify.register(cors, {
    // Разрешаем запросы только с этого адреса (наш фронтенд)
    origin: process.env.FRONTEND_URL 
  })
})