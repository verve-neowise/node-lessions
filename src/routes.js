const { Router } = require('express')

const { allFruits, addFruit, deleteFruit, managerAdd, managerDelete } = require('./controller')

const app = Router()

app.get('/', allFruits)

app.get('/add', addFruit)

app.get('/delete', deleteFruit)

app.get('/manager/add', managerAdd)

app.get('/manager/delete', managerDelete)

module.exports = app