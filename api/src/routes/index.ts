import express from 'express'
import tasks from './tasks'

const router = express.Router()

router.get('/', (_req, res) => {
  return res.send('API is working!!')
})

router.use('/tasks', tasks)

export default router
