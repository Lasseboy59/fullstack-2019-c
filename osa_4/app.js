const config = require('./utils/config')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
const blogsRouter = require('./controllers/blogs')

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true })

app.use(cors())
app.use(bodyParser.json())

app.use('/api/blogs/', blogsRouter)

module.exports = app