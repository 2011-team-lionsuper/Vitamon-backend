'use strict'

const db = require('../server/db')
const {User, Goal} = require('../server/db/models')

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
    User.create({name: 'Daniel', email: 'daniel@email.com', password: '123'}),

    User.create({name: 'Alex', email: 'alex@email.com', password: '123'}),
    User.create({name: 'Adam', email: 'adam@email.com', password: '123'}),
    User.create({name: 'Betty', email: 'betty@email.com', password: '123'}),
    User.create({name: 'Bob', email: 'bob@email.com', password: '123'}),
    User.create({name: 'Cindy', email: 'cindy@email.com', password: '123'}),
    User.create({name: 'Chris', email: 'chris@email.com', password: '123'}),
    User.create({name: 'Dorothy', email: 'dorothy@email.com', password: '123'}),
    User.create({name: 'Dom', email: 'dom@email.com', password: '123'}),
    User.create({name: 'Elisa', email: 'elisa@email.com', password: '123'}),
    User.create({name: 'Eric', email: 'eric@email.com', password: '123'}),
    User.create({name: 'French', email: 'french@email.com', password: '123'}),
    User.create({name: 'Fannie', email: 'fannie@email.com', password: '123'}),
    User.create({name: 'Grace', email: 'grace@email.com', password: '123'}),
    User.create({name: 'Greg', email: 'greg@email.com', password: '123'}),
    User.create({name: 'Hosanna', email: 'hosanna@email.com', password: '123'}),
    User.create({name: 'Jose', email: 'jose@email.com', password: '123'}),
    User.create({name: 'Ignacio', email: 'ignacio@email.com', password: '123'}),
    User.create({name: 'Kathy', email: 'kathy@email.com', password: '123'}),
    User.create({name: 'Lamar', email: 'lamar@email.com', password: '123'}),
    User.create({name: 'Nancy', email: 'nancy@email.com', password: '123'})
  ])

  const goals = await Promise.all([
    Goal.create({
      userId: users[1].id,
      type: 'Water',
      quantity: 8,
      numberOfDays: 7,
      status: 'middle',
      completedDays: 3
    }),
    Goal.create({
      userId: users[1].id,
      type: 'Water',
      quantity: 6,
      numberOfDays: 5,
      status: 'start',
      completedDays: 0
    }),
    Goal.create({
      userId: users[2].id,
      type: 'Water',
      quantity: 8,
      numberOfDays: 7,
      status: 'complete',
      completedDays: 7
    }),
    Goal.create({
      userId: users[2].id,
      type: 'Steps',
      quantity: 1000,
      numberOfDays: 3,
      status: 'complete',
      completedDays: 3
    }),
    Goal.create({
      userId: users[3].id,
      type: 'Steps',
      quantity: 1200,
      numberOfDays: 4,
      status: 'start',
      completedDays: 0
    }),
    Goal.create({
      userId: users[4].id,
      type: 'Water',
      quantity: 8,
      numberOfDays: 40,
      status: 'warning',
      completedDays: 2
    }),
    Goal.create({
      userId: users[1].id,
      type: 'Steps',
      quantity: 1000,
      numberOfDays: 7,
      status: 'warning',
      completedDays: 2
    }),

    Goal.create({
      userId: users[6].id,
      type: 'Water',
      quantity: 4,
      numberOfDays: 4,
      status: 'start',
      completedDays: 0
    }),
    Goal.create({
      userId: users[6].id,
      type: 'Water',
      quantity: 20,
      numberOfDays: 4,
      status: 'complete',
      completedDays: 4
    }),
    Goal.create({
      userId: users[6].id,
      type: 'Water',
      quantity: 10,
      numberOfDays: 5,
      status: 'complete',
      completedDays: 5
    }),
    Goal.create({
      userId: users[6].id,
      type: 'Steps',
      quantity: 1000,
      numberOfDays: 5,
      status: 'middle',
      completedDays: 3
    }),
    Goal.create({
      userId: users[6].id,
      type: 'Steps',
      quantity: 1000,
      numberOfDays: 30,
      status: 'middle',
      completedDays: 15
    }),
    Goal.create({
      userId: users[18].id,
      type: 'Water',
      quantity: 4,
      numberOfDays: 5,
      status: 'start',
      completedDays: 0
    }),
    Goal.create({
      userId: users[18].id,
      type: 'Water',
      quantity: 10,
      numberOfDays: 17,
      status: 'warning',
      completedDays: 15
    }),
    Goal.create({
      userId: users[18].id,
      type: 'Water',
      quantity: 20,
      numberOfDays: 70,
      status: 'complete',
      completedDays: 70
    }),
    Goal.create({
      userId: users[18].id,
      type: 'Steps',
      quantity: 10000,
      numberOfDays: 5,
      status: 'start',
      completedDays: 0
    }),
    Goal.create({
      userId: users[18].id,
      type: 'Steps',
      quantity: 1000,
      numberOfDays: 7,
      status: 'middle',
      completedDays: 4
    }),
    Goal.create({
      userId: users[24].id,
      type: 'Steps',
      quantity: 1000,
      numberOfDays: 10,
      status: 'complete',
      completedDays: 10
    }),
    Goal.create({
      userId: users[24].id,
      type: 'Water',
      quantity: 10,
      numberOfDays: 3,
      status: 'complete',
      completedDays: 3
    }),
    Goal.create({
      userId: users[24].id,
      type: 'Water',
      quantity: 1,
      numberOfDays: 10,
      status: 'complete',
      completedDays: 10
    }),
    Goal.create({
      userId: users[24].id,
      type: 'Water',
      quantity: 50,
      numberOfDays: 7,
      status: 'complete',
      completedDays: 7
    }),
    Goal.create({
      userId: users[24].id,
      type: 'Water',
      quantity: 8,
      numberOfDays: 7,
      status: 'start',
      completedDays: 0
    })
  ])

  const friends = await Promise.all([
    users[0].addFriend(2),
    users[1].addFriend(1),
    users[0].addFriend(3),
    users[2].addFriend(1),
    users[0].addFriend(4),
    users[3].addFriend(1),
    users[0].addFriend(5),
    users[4].addFriend(1),
    users[1].addFriend(3),
    users[2].addFriend(2),
    users[1].addFriend(4),
    users[3].addFriend(2),
    users[1].addFriend(6),
    users[4].addFriend(2),
    users[2].addFriend(4),
    users[3].addFriend(3),
    users[4].addFriend(18),
    users[17].addFriend(5),
    users[4].addFriend(3),
    users[4].addFriend(4),
    users[6].addFriend(8),
    users[7].addFriend(7),
    users[6].addFriend(9),
    users[8].addFriend(7),
    users[6].addFriend(10),
    users[9].addFriend(7),
    users[6].addFriend(12),
    users[11].addFriend(7),
    users[18].addFriend(14),
    users[18].addFriend(15),
    users[18].addFriend(16),
    users[18].addFriend(17),
    users[18].addFriend(19),
    users[18].addFriend(20),
    users[18].addFriend(21),
    users[18].addFriend(22),
    users[18].addFriend(23),
    users[18].addFriend(24),
    users[18].addFriend(25),
    users[24].addFriend(0),
    users[24].addFriend(1),
    users[24].addFriend(2),
    users[24].addFriend(3),
    users[24].addFriend(4),
    users[24].addFriend(5),
    users[24].addFriend(6)
    // Is user[6] Alex but has userId of 7?  Then user[24] should be Nancy.
  ])

  console.log(`seeded ${users.length} users, ${goals.length} goals,
  and ${friends.length} friends`)
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
