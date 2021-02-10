const router = require('express').Router()
const {Goal, User} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const goals = await Goal.findAll()
    res.json(goals)
    console.log(goals)
  } catch (err) {
    next(err)
  }
})

router.get('/:userId', async (req, res, next) => {
  try {
    const user = await User.findOne({where: {id: req.params.userId}})
    const goals = await user.getGoals()
    res.json(goals)
  } catch (err) {
    next(err)
  }
})

router.put('/:userGoalId', async (req, res, next) => {
  try {
    const goal = await Goal.findByPk(req.params.userGoalId)

    await goal.update(req.body)
    await goal.save()
    await goal.reload()
    res.send(goal)
  } catch (error) {
    next(error)
  }
})

router.post('/add', async (req, res, next) => {
  try {
    const goal = await Goal.create(req.body)

    res.send(goal)
  } catch (error) {
    next(error)
  }
})
