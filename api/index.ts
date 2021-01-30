import express from 'express'
import cors from 'cors'
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from './swagger.json'
import router from './src/routes'
console.log('starting Express server...')

const app = express()
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use(cors)
app.use(express.json())

app.use(router)

app.listen(8000, () => {
  console.log('API listening on port 8000')
})
