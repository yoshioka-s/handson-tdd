import express from 'express'

const router = express.Router()

router.get('/', (_req, res) => {
  return res.send('API is working!!')
})

export default router
