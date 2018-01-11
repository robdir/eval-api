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

router.get('/:id/students', findBatch, (req, res, next) => {
  students = req.batch.students
  students.find()
    .sort({ name: 1})
    .then((students) => res.json(students))
    .catch((error) => next(error))
})

module.exports = router
