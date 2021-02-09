const router = require('express').Router()

const {User, Goal, UserGoal} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
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

router.get('/:email', async (req, res, next) => {
  try {
    const user = await User.findOne(
      {where: {email: req.params.email}},
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      {attributes: ['id', 'email', 'name']}
    )
    res.json(user)
  } catch (err) {
    next(err)
  }
})

router.post('/:userId/add/:friendId', async (req, res, next)=> {
  try {
    const user = await User.findOne(
      {where: {id: req.params.userId}}
    )
    // console.log(user.getAssociations)
    // const friends = await User.getFriends()
    // const friend = await User.findOne(
    //   {where: {id: req.params.friendId}}
    // )
    const friends = await user.getFriends()
    if(friends.map( friend => friend.id).includes(req.params.friendId)){
      res.send('Already friends')
      return;
    } else {
      // const friend = await User.findByPk(req.params.friendId)
      await user.addFriend(req.params.friendId)
      // await user.update(req.body)
      // await user.save();
      // await user.reload();
      res.send('friend added')
      return;
    } 
  } catch (err){
    next(err)
  }
})

