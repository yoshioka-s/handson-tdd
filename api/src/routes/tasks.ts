import express from 'express'
import moment from 'moment'
import Task from '../models/task'

const router = express.Router()

router.get('/', async (req, res) => {
  const tasks = await Task.findAll()
  return res.json(tasks)
})

router.post('/', async (req, res) => {
  try {
    const task = await Task.create(req.body)
    return res.status(201).json(task)
  } catch (err) {
    return res.status(422).json(err.errors)
  }
})

router.patch('/:id', async (req, res) => {
  const task = await Task.findByPk(req.params.id)
  if (!task) {
    return res.status(404).send('Not Found')
  }
  await task.update({status: req.body.status, startedAt: moment().toISOString()})
  return res.json(task)
})

router.delete('/:id', async (req, res) => {
  const task = await Task.findByPk(req.params.id)
  if (!task) {
    return res.status(404).send('Not Found')
  }
  await task.destroy()
  return res.status(204).send()
})
export default router
