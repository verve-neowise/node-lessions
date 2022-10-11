const { Router } = require('express')

const { todos, addTodo, clear, deleteIndex } = require('./controller')

const app = Router()

app.get('/', todos)
app.get('/add', addTodo)
app.get('/clear', clear)
app.get('/delete', deleteIndex)

module.exports = app