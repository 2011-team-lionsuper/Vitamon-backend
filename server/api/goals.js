const router = require('express').Router()
const {Goal, User, UserGoal} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const goals = await UserGoal.findAll({})
    res.json(goals)
  } catch (err) {
    next(err)
  }
})

router.put('/:userGoalId', async (req, res, next) => {
  try {
    const userGoal = await UserGoal.findOne({
      where: {id: req.params.userGoalId}
    })
    await userGoal.update(req.body)
    await userGoal.save()
    await userGoal.reload()
    res.send(userGoal)
  } catch (error) {
    next(error)
  }
})
