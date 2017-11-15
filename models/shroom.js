const knex = require('../db/connection')

function get() {
  return knex('shrooms')
}

function getShroom(id) {
  return knex('shrooms')
  .where({ id })
  .first()
}


module.exports = {
  get,
  getShroom
}