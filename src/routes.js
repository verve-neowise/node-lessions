const { Router } = require('express')

const { dashboardPage } = require('./dashboard.controller')
const { groupPage, deleteGroup, addGroup } = require('./group.controller')
const { pupilsPage    } = require('./pupil.controller')

const app = Router()

app.get('/', dashboardPage)

app.get('/groups', groupPage)
app.post('/groups', addGroup)
app.get('/groups/delete', deleteGroup)

app.get('/pupils', pupilsPage)

module.exports = app
