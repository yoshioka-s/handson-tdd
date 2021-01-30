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
    let task
    beforeEach(async () => {
      task = await taskFactory()
    })

    it('success', done => {
      api.get('/tasks').expect(200, done)
    })

    it('returns an array of tasks', async () => {
      const res = await api.get('/tasks')
      expect(res.body).toBeInstanceOf(Array)
      expect(res.body[0].id).toBe(task.id)
    })
  })

  xdescribe('PATCH /tasks/{id}', () => {
    describe('Given a initialized task', () => {
      let task
      beforeEach(async () => {
        task = await taskFactory()
      })
      describe('When send status: started', () => {
        it('success', done => {
        })
        it('updates the status to started', async () => {
        })
        it('sets the startedAt', async () => {
        })
      })
    })
    describe('Given the id does not exit', () => {
      describe('When send status: started', () => {
        it('fails', done => {
        })
      })
    })
  })

  xdescribe('POST /tasks', () => {
    describe('When name is not empty', () => {
      const name = 'test'
      it('success', done => {
      })
      it('returns a new record', async () => {
      })
    })
    describe('When name is empty', () => {
      const name = ''
      it('fails', done => {
      })
    })
  })

  xdescribe('DELETE /tasks/{id}', () => {
    describe('When deletes for a existing task', () => {
      let task
      beforeEach(async () => {
        task = await taskFactory()
      })
      it('success' , done => {
      })
      it('deletes the task', async () => {
      })
    })
    describe('When deletes non existing task', () => {
      it('fails', done => {
      })
    })
  })
})
