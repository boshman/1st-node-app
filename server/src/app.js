
console.log('hello')
const express = require('express')
const bodyParser = require('body-parser') // parse json
const cors = require('cors') // allows any client to hit the server -- not secure
const morgan = require('morgan') // logging

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/status', (req, res) => {
  res.send({
    message: 'hello world'
  })
})

app.listen(process.env.PORT || 8081)
