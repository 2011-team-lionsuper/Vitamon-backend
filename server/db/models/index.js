const User = require('./user')
const Goal = require('./goal')
const UserGoal = require('./usergoal')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

User.belongsToMany(User, {
  as: 'friends',
  through: 'friendship'
})
User.belongsToMany(Goal, {
  through: {model: UserGoal, unique: false, constraints: false},
  foreignKey: {
    name: 'userId',
    primaryKey: false
  },
  otherKey: {
    name: 'goalId',
    primaryKey: false
  }
})
Goal.belongsToMany(User, {
  through: {model: UserGoal, unique: false, constraints: false},
  foreignKey: {
    name: 'goalId',
    primaryKey: false
  },
  otherKey: {
    name: 'userId',
    primaryKey: false
  }
})

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Goal,
  UserGoal
}
