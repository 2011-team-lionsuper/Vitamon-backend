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

UserGoal.prototype.updateStatus = function() {
  let percent = this.completedDays / this.numberOfDays * 100
  console.log('usergoal BEFORE', this)
  if (percent <= 40) {
    this.status = 'start'
  } else if (percent >= 40 && percent < 100) {
    this.status = 'middle'
  } else if (percent >= 100) {
    this.status = 'complete'
  }
  console.log('usergoal AFTER', this)
}

const statusUpdate = usergoal => {
  usergoal.updateStatus()
}

UserGoal.afterUpdate(statusUpdate)

module.exports = UserGoal
