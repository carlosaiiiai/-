const express = require('express');
const port = 1234;
const app = express()
const axios = require('axios')
const router = express.Router();

app.use(express.urlencoded({
  extended: true
}))
// app.use('/', router)

app.get('/', async (req, res) => {
  const result = await axios.get('https://www.youtube.com/');
  console.log(result.data)
  res.send(result.data)
})

app.listen(port, () => {
  console.log(`http://localhost:${port} is running`)
})