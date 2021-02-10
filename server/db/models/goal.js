const Sequelize = require('sequelize')
const db = require('../db')

// allowNull: false,
//autoIncrement: true,
//primaryKey: true

const Goal = db.define('goal', {
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
  },
  type: Sequelize.ENUM('Water', 'Steps')
})

Goal.prototype.updateStatus = function() {
  let percent = this.completedDays / this.numberOfDays * 100
  if (percent <= 40) {
    this.status = 'start'
  } else if (percent >= 40 && percent < 100) {
    this.status = 'middle'
  } else if (percent >= 100) {
    this.status = 'complete'
  }
}

const statusUpdate = goal => {
  goal.updateStatus()
}

Goal.afterCreate(statusUpdate)

Goal.beforeSave(statusUpdate)

module.exports = Goal
