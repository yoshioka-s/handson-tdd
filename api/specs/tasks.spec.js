import request from 'supertest'
import app from '../src/app'
import taskFactory from './factories/task'
import truncate from './truncate'

describe('tasks endpoints', () => {
  const api = request(app)
  afterEach(() => {
    return truncate()
  })

  describe('GET /tasks', () => {
    it('success', done => {
      api.get('/tasks').expect(200, done)
    })

    it('returns an array of tasks', async () => {
      const task = await taskFactory()
      const res = await api.get('/tasks')
      expect(res.body).toBeInstanceOf(Array)
      expect(res.body[0].id).toBe(task.id)
    })
  })

  describe('PATCH /tasks/{id}', () => {
    describe('Given a initialized task', () => {
      let task
      beforeEach(async () => {
        task = await taskFactory()
      })
      describe('When send status: started', () => {
        it('success', (done) => {
          api.patch(`/tasks/${task.id}`).send({ status: 'started' }).expect(200, done)
        })
        it('updates the status to started', async () => {
          const res = await request(app).patch(`/tasks/${task.id}`).send({ status: 'started' })
          expect(res.body.status).toBe('started')
        })
        it('sets the startedAt', async () => {
          const res = await request(app).patch(`/tasks/${task.id}`).send({ status: 'started' })
          expect(res.body.startedAt).toBeDefined()
        })
      })
    })
    describe('Given the id does not exit', () => {
      describe('When send status: started', () => {
        it('fails', done => {
          api.patch('/tasks/1').send({ status: 'started' }).expect(404, done)
        })
      })
    })
  })

  describe('POST /tasks', () => {
    describe('When name is not empty', () => {
      const name = 'test'
      it('success', done => {
        api.post('/tasks').send({ name }).expect(201, done)
      })
      it('returns a new record', async () => {
        const res = await api.post('/tasks').send({ name })
        expect(res.body.name).toBe(name)
        expect(res.body.id).toBeGreaterThan(0)
      })
    })
    describe('When name is empty', () => {
      const name = ''
      it('fails', done => {
        api.post('/tasks').send({ name }).expect(422, done)
      })
    })
  })

  describe('DELETE /tasks/{id}', () => {
    describe('When deletes for a existing task', () => {
      let task
      beforeEach(async () => {
        task = await taskFactory()
      })
      it('success' , done => {
        api.delete(`/tasks/${task.id}`).expect(204, done)
      })
      it('deletes the task', async () => {
        await api.delete(`/tasks/${task.id}`)
        expect(task.reload()).rejects.toThrow()
      })
    })
    describe('When deletes non existing task', () => {
      it('fails', done => {
        api.delete('/tasks/1').expect(404, done)
      })
    })
  })
})
