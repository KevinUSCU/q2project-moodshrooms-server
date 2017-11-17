// Check node environment
const environment = process.env.NODE_ENV || 'development'

// Set up Express
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
app.disable('x-powered-by')

// Attach SQL database using connection file
require('./db/connection')

// Set up Cors
const cors = require('cors')
if (environment === 'development') {
  var corsOptions = {
    origin: 'http://127.0.0.1:8080',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
  }  
} else {
  var corsOptions = {
    origin: 'https://kevinuscu-moodshrooms-client.surge.sh',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
  }
}
app.use(cors(corsOptions))

// Set up Body-Parser
const bodyParser = require('body-parser')
app.use(bodyParser.json())

// Set up Morgan (only in development mode)
if (environment === 'development') {
  const morgan = require('morgan')  
  app.use(morgan('dev'))
}

// Routes
const { PartsRouter, ShroomsRouter, UsersRouter } = require('./routes')
app.use('/parts', PartsRouter)
app.use('/shrooms', ShroomsRouter)
app.use('/users', UsersRouter)

app.use((err, req, res, next) => {
  const status = err.status || 500
  res.status(status).json({ error: err.error })
})

app.use((req, res, next) => {
  res.status(404).json({ error: `This doesn't exist in Shroomland.` })
})

// Listener
const listener = () => console.log(`Listening on port: ${port}`)
app.listen(port, listener)

module.exports = app