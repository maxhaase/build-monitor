const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.use('/', (req, res) => {
  console.log('ENDPOINT /')
  res.send('Hello World')
})

app.listen(PORT, () => {
  console.log('Listening to port ', PORT)
})