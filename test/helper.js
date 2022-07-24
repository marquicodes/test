'use strict'

const fcli = require('fastify-cli/helper')

const startArgs = '-l info --options app.js'

const envParam = {
  NODE_ENV: 'test',
  MONGO_URL: 'mongodb://localhost:27017/test'
}

async function buildApp (t, env = envParam) {
  const app = await fcli.build(startArgs, { configData: env })
  t.teardown(() => { app.close() })
  return app
}

module.exports = {
  buildApp
}
