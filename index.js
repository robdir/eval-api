const express = require('express')
const { Class } = require('./models')

const PORT = process.env.PORT || 3030

let app = express()

app.get('/classes', (req, res, next) => {
  Class.find()

  .sort({ batchNum: -1 })
  .then((classes) => res.json(classes))
  .catch((error) => next(error))
})


app.get('/', (req, res) => {
  res.send('Hello from Express!')
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
