const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('App 1')
})

app.listen(3000, () => {
  console.log('App 1 is running on port 3000')
})