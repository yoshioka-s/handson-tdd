import request from 'supertest'
import app from '../src/app'

describe('tasks endpoints', () => {
  describe('GET /tasks', () => {
    it('success', async () => {
      const res = await request(app).get('/tasks')
      expect(res.statusCode).toBe(200)
    })
  })
})
