const router = require('express').Router()
const { Batch } = require('../../models')

const findBatch = (req, res, next) => {
  const id = req.params.id

  Batch.findById(id)
    .then((batch) => {
      req.batch = batch
      next()
    })
    .catch((error) => next(error))
}

router.get('/batches/:id/students', findBatch, (req, res) => {
  req.students = req.batch.students
  res.json(req.students)
})

module.exports = router
