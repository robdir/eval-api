const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const { batches, users, sessions, batchStudents } = require('./routes')
const passport = require('./config/auth')

const PORT = process.env.PORT || 3030

const app = express()

app
  .use(cors())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(passport.initialize())
  .use(batches)
  .use(batchStudents)
  .use(users)
  .use(sessions)

  .use((req, res, next) => {
    const err = new Error('Not Found')
    err.status = 404
    next(err)
    })

  .use((err, req, res, next) => {
    res.status(err.status || 500)
    res.send({
      message: err.message,
      error: app.get('env') === 'development' ? err : {}
    })
  })

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
