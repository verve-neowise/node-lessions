# Handlebars

[Documentation](https://www.npmjs.com/package/express-handlebars)

Install

```
npm install express-handlebars
```

configure

```js
const { engine } = require('express-handlebars')

...

app.engine('.hbs', engine({ extname: '.hbs' }))
app.set('view engine', '.hbs')
app.set('views', './views')

```
