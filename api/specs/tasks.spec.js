import request from 'supertest'
import app from '../src/app'
import truncate from './truncate'

describe('tasks endpoints', () => {
  afterEach(() => {
    return truncate()
  })
  describe('GET /tasks', () => {
    it('success', async () => {
      const res = await request(app).get('/tasks')
      expect(res.statusCode).toBe(200)
    })
  })
})
