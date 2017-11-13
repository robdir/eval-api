const mongoose = require('mongoose')

mongoose.Promise = global.Promise

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/evaluation'
mongoose.set('debug', true)
mongoose.connect(MONGODB_URI, { useMongoClient: true})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log('Connected to MongoDB-evaluations')
})

module.exports = mongoose
