const express = require('express')
const { Batch } = require('./models')

const PORT = process.env.PORT || 3030

let app = express()

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

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
