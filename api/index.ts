import express from 'express'
import router from './src/routes'
console.log('start')

const app = express()
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Oring', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})
app.use(express.json())

app.use(router)

app.listen(8000, () => {
  console.log('API listening on port 8000')
})

