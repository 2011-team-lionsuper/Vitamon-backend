const router = require('express').Router()
const {isAdmin} = require('../util')

const {User, Goal} = require('../db/models')
module.exports = router

router.get('/', isAdmin, async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.get('/:userId/friends', async (req, res, next) => {
  try {
    const user = await User.findOne({where: {id: req.params.userId}})
    const friends = await user.getFriends()
    res.json(friends)
  } catch (err) {
    next(err)
  }
})

router.get('/:email', async (req, res, next) => {
  try {
    const user = await User.findOne(
      {where: {email: req.params.email}},

      {attributes: ['id', 'email', 'name']}
    )
    res.json(user)
  } catch (err) {
    next(err)
  }
})

router.post('/:userId/add/:friendId', async (req, res, next) => {
  try {
    const user = await User.findOne({where: {id: req.params.userId}})

    const friends = await user.getFriends()
    if (friends.map(friend => friend.id).includes(req.params.friendId)) {
      res.send('Already friends')
      return
    } else {
      await user.addFriend(req.params.friendId)

      res.send('friend added')
      return
    }
  } catch (err) {
    next(err)
  }
})
