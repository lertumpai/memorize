const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const shell = require('shelljs')

const app = express()

app.use(
  cors(),
  bodyParser.json({ limit: '15mb' }),
  bodyParser.urlencoded({ extended: true }),
)

app.get('/test', (req, res) => {
  res.send({ message: 'hook run bash script', url: process.env.SERVER_URL || 'localhost:3000'  })
})

app.post('/backend', async (req, res) => {
  await shell.chmod('755', './scripts/backend.sh')
  shell.exec('./scripts/backend.sh')
  res.send({ message: 'backend updated' })
})

app.post('/frontend', async (req, res) => {
  await shell.chmod('755', './scripts/frontend.sh')
  shell.exec('./scripts/frontend.sh')
  res.send({ message: 'frontend updated' })
})

app.listen({ port: 3333 }, () => {
  console.log('Server ready at http://localhost:3333')
})
