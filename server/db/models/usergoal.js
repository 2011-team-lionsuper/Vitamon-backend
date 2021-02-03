const Sequelize = require('sequelize')
const db = require('../db')

const UserGoal = db.define('usergoal', {
  status: {
    type: Sequelize.ENUM('start', 'middle', 'warning', 'fail', 'complete'),
    defaultValue: 'start'
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 1
    }
  },
  numberOfDays: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 365
    }
  }
})

module.exports = UserGoal
