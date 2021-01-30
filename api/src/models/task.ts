import { DataTypes } from 'sequelize'
import sequelize from '../../db/squelize'

const Task = sequelize.define('Task', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: 0
  },
  startedAt: {
    type: DataTypes.TIME
  },
  finishedAt: {
    type: DataTypes.TIME
  }
})

export default Task

