import request from 'supertest'
import app from '../src/app'
import taskFactory from './factories/task'
import truncate from './truncate'

describe('tasks endpoints', () => {
  afterEach(() => {
    return truncate()
  })
  beforeEach(() => {
    taskFactory()
  })
  describe('GET /tasks', () => {
    it('success', async () => {
      const res = await request(app).get('/tasks')
      expect(res.statusCode).toBe(200)
    })
  })
})
