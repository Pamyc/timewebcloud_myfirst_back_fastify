// app-example-fastify-master/routes/api.js

'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/api/message', async function (request, reply) {
    // Отправляем простое JSON-сообщение
    return { message: 'Привет от бэкенда Fastify!' }
  })
}