import { DataTypes } from 'sequelize'
import sequelize from '../../db/squelize'

const Task = sequelize.define('Task', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  status: {
    type: DataTypes.ENUM('initialized', 'started', 'finished'),
    allowNull: false,
    defaultValue: 'initialized'
  },
  startedAt: {
    type: DataTypes.TIME
  },
  finishedAt: {
    type: DataTypes.TIME
  }
})

export default Task

