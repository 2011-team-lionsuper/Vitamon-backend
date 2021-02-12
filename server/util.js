const isAdmin = (req, res, next) => {
  if (!req.user || (req.user && !req.user.isAdmin)) {
    const err = new Error('Vitamon admins only!')
    err.status = 401
    return next(err)
  }
  next()
}

const usersOnly = (req, res, next) => {
  if (!req.user) {
    const err = new Error('Not allowed when not logged in')
    err.status = 401
    console.log(err.message)
    return next(err)
  }
  next()
}

module.exports = {isAdmin, usersOnly}
