const router = require('express').Router()
const { Batch } = require('../models')

router.get('/batches', (req, res, next) => {
  Batch.find()
    .sort({ batchNum: -1 })
    .then((batches) => res.json(batches))
    .catch((error) => next(error))
})

.get('/batches/:id', (req, res, next) => {
  const id = req.params.id
  Batch.findById(id)
  .then((batch) => {
    if (!batch) { return next()} 
    res.json(batch)
  })
  .catch((error) => next(error))
})

.post('/batches', (req, res, next) => {
  let newBatch = req.body
  // batch will probably need id of batch...
  Batch.create(newBatch)
    .then((batch) => res.json(batch))
    .catch((error) => next(error))
})

module.exports = router
