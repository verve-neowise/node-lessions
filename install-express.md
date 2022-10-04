# Configure project

## Create package

```bash
npm init -y
```

## Install dependcies

```bash
npm install express
```

## Configure app

server.js

```js
const express = require('express')

const app = express()

app.listen(8080, () => {
    console.log('Server is running on http://localhost:8080')
})
```
