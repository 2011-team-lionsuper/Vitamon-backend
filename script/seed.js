'use strict'

const db = require('../server/db')
const {User, Goal, UserGoal} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({
      name: 'Cody',
      email: 'cody@email.com',
      password: '123',
      isAdmin: true
    }),
    User.create({
      name: 'Melissa',
      email: 'melissa@email.com',
      password: '123'
    }),
    User.create({
      name: 'Priscila',
      email: 'priscila@email.com',
      password: '123'
    }),
    User.create({
      name: 'Veronica',
      email: 'veronica@email.com',
      password: '123'
    }),
    User.create({name: 'Daniel', email: 'daniel@email.com', password: '123'})
  ])

  const goals = await Promise.all([
    Goal.create({type: 'Water'}),
    Goal.create({type: 'Steps'})
  ])

  const usergoal = await Promise.all([
    UserGoal.create({
      userId: users[1].id,
      goalId: goals[0].id,
      quantity: 8,
      numberOfDays: 7,
      completedDays: 0
    }),
    UserGoal.create({
      userId: users[1].id,
      goalId: goals[0].id,
      quantity: 6,
      numberOfDays: 5,
      completedDays: 0
    }),
    UserGoal.create({
      userId: users[2].id,
      goalId: goals[0].id,
      quantity: 8,
      numberOfDays: 7,
      status: 'middle',
      completedDays: 5
    }),
    UserGoal.create({
      userId: users[3].id,
      goalId: goals[1].id,
      quantity: 1200,
      numberOfDays: 4,
      completedDays: 0
    }),
    UserGoal.create({
      userId: users[4].id,
      goalId: goals[0].id,
      quantity: 8,
      numberOfDays: 300,
      status: 'warning',
      completedDays: 20
    }),
    UserGoal.create({
      userId: users[1].id,
      goalId: goals[1].id,
      quantity: 1000,
      numberOfDays: 7,
      completedDays: 0
    })
  ])

  const friends = await Promise.all([
    users[0].addFriend(2),
    users[0].addFriend(3),
    users[0].addFriend(4),
    users[0].addFriend(5),
    users[1].addFriend(3),
    users[1].addFriend(4),
    users[1].addFriend(5),
    users[2].addFriend(4)
  ])

  console.log(`seeded ${users.length} users, ${goals.length} goals,
   ${usergoal.length} user-goals (monsters), and ${friends.length} friends`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
