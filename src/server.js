// module imports
const express = require('express')
const { engine } = require('express-handlebars')

// file imports
const routes = require('./routes')

// express config
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// hbs config
app.engine('.hbs', engine({ extname: ".hbs" }))
app.set('view engine', '.hbs')
app.set('views', './views')

// register routes
app.use(routes)

// run server
app.listen(8080, () => {
    console.log('Server started on http://localhost:8080');
})