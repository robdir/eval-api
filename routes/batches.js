const router = require('express').Router()
const { Batch } = require('../models')


router.get('/', (req, res) => {
  res.send('Evaluation server running: enter /batches to view json data')
})


router.get('/batches', (req, res, next) => {
  Batch.find()
    .sort({ batchNum: -1 })
    .then((batches) => res.json(batches))
    .catch((error) => next(error))
})

router.get('/:id', (req, res, next) => {
  const id = req.params.id
  Batch.findById(id)
  .then((batch) => {
    if (!batch) { return next()} 
    res.json(batch)
  })
  .catch((error) => next(error))
})

router.post('/batches', (req, res, next) => {
  const newBatch = req.body
  Batch.create(newBatch)
    .then((batch) => res.json(batch))
    .catch((error) => next(error))
})


router.patch('./:id', (req, res, next) => {
  const id = req.params.id
  const student = req.body

  Batch.findByIdAndUpdate(id, { $set: student }, { new: true})
    .then((batch) => res.json(batch))
    .catch((error) => next(error))
})


router.delete('/:id', (res, req, next) =>{
  const id = req.params.id
  Batch.findByIdAndRemove(id)
    .then(() => {
      res.status = 200
      res.json({
        message: 'Batch removed',
        _id: id
      })
    })
    .catch((error) => next(error))
})


module.exports = router
