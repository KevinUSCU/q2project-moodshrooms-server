const { User } = require('../models')

// Note - we will never return the 'key' for a user to the client, as it's kind of like a poor man's password.
// All 'key' checks will be done on the server, not on the client.

function getAllUsers(req, res, next) {
  User.getAllUsers()
  .then(users => {
    res.json(users)
  })
}

function verifyUserByUsername(req, res, next) {
  const username = req.params.username
  const key = req.body.key
  User.getUserByUsername(username)
  .then(user => {
    if (!user) return next({ status: 404, error: `Error 404: That's not a valid user!` })
    if (key !== user.key) return next({ status: 403, error: `Error 403: Key is incorrect.` })
    return res.status(200).json(user.id)
  })
}

function createUser(req, res, next) {
  const { username, key } = req.body
  if (!username) return next({ status: 400, error: `Error 400: You must supply a username` })
  if (!key) return next({ status: 400, error: `Error 400: You must provide a key.` })
  User.getUserByUsername(username)
  .then(user => {
    if (user) return next({ status: 409, error: `Error 409: A user with that username already exists.` })
    User.createUser(username, key)
    .then(result => res.status(201).json({ id: result[0].id }))
  })
}

module.exports = {
  getAllUsers,
  verifyUserByUsername,
  createUser
}
