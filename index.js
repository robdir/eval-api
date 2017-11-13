const express = require('express')

const PORT = process.env.PORT || 3030

let app = express()

// an extremely basic GET from the server, these will eventually serve
// up all the data requested, though via ROUTES dir
app.get('/', (req, res) => {
  res.send('Hello from Express!')
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
