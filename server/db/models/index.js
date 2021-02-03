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
User.belongsToMany(Goal, {through: UserGoal})
Goal.belongsToMany(User, {through: UserGoal})
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
