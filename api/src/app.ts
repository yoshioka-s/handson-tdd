import express from 'express'
import cors from 'cors'
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from '../swagger.json'
import router from './routes'

const app = express()
app.use(express.json())
app.use(cors)
app.use(router)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

export default app
