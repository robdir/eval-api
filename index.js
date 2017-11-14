const express = require('express')
const bodyParser = require('body-parser')
const { Batch } = require('./models')
const passport = require('./config/auth')

const PORT = process.env.PORT || 3030

let app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
// all batches, newest batch first
app.get('/batches', (req, res, next) => {
  Batch.find()
    .sort({ batchNum: -1 })
    .then((batches) => res.json(batches))
    .catch((error) => next(error))
})

app.get('/batches/:id', (req, res, next) => {
  const id = req.params.id
  Batch.findById(id)
  .then((batch) => {
    if (!batch) { return next()}
    res.json(batch)
  })
  .catch((error) => next(error))
})

app.post('/batches',
passport.authorize('jwt', { session: false}), (req, res, next) => {
  let newBatch = req.body
  // batch will probably need id of user...
  Batch.create(newBatch)
    .then((batch) => res.json(batch))
    .catch((error) => next(error))
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
