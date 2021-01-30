import _ from 'lodash'
import models from '../src/models'

export default async function() {
  return Promise.all(_.map(models, model => {
    return model.destroy({ where: {}, force: true })
  }))
}
