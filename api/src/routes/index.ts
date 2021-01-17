import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  return res.send('API is working!')
})

export default router
