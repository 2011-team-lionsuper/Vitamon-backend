const Sequelize = require('sequelize')
const db = require('../db')

const Goal = db.define('goal', {
  type: Sequelize.ENUM('Water', 'Steps')
})

module.exports = Goal
