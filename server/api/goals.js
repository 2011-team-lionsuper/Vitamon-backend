const router = require('express').Router()
const {Goal, User, UserGoal} = require('../db/models')
module.exports = router

router.get('/:userId', async (req, res, next) => {
  try {
    const goals = await UserGoal.findAll({
      where: {
        userId: req.params.userId
      }
    })
    res.json(goals)
  } catch (err) {
    next(err)
  }
})
