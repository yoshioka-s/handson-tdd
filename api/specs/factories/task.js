import faker from 'faker'
import Task from '../../src/models/task'

const data = (props => {
  const defaultData = {
    name: faker.hacker.phrase(),
  }
  return Object.assign(defaultData, props)
})
export default (props = {}) => Task.create(data(props))
