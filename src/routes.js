const { Router } = require('express')

const { home } = require('./controller')

const app = Router()

app.get('/', home)

module.exports = app