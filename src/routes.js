const { Router } = require('express')

const { dashboardPage } = require('./dashboard.controller')
const { groupPage, deleteGroup, addGroup } = require('./group.controller')
const { pupilsPage, deletePupil, addPupil } = require('./pupil.controller')

const app = Router()

app.get('/', dashboardPage)

app.get('/groups', groupPage)
app.post('/groups', addGroup)
app.get('/groups/delete', deleteGroup)

app.get('/pupils', pupilsPage)
app.get('/pupils/delete', deletePupil)

app.post('/pupils', addPupil)

module.exports = app
