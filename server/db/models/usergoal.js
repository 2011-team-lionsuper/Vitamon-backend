const Sequelize = require('sequelize')
const db = require('../db')

// allowNull: false,
//autoIncrement: true,
//primaryKey: true

const UserGoal = db.define('usergoal', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
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
  completeQuantity: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  },
  numberOfDays: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 365
    }
  },
  completedDays: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
      max: 365
    }
  }
})

module.exports = UserGoal
