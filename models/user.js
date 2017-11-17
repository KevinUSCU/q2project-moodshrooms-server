const knex = require('../db/connection')

function getAllUsers() {
  return knex('users')
  .select('id', 'username')
}

function getUserByUsername(username) {
  return knex('users')
  .where({ username })
  .first()
}

function createUser(username, key) {
  return knex('users')
  .insert({ username, key })
  .returning(['id'])
}

module.exports = {
  getAllUsers,
  getUserByUsername,
  createUser
}