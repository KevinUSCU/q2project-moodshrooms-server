const knex = require('../db/connection')

function get() {
  return knex('shroom_parts')
}

function getType(type) {
  return knex('shroom_parts')
    .where({ type })
}

function getPart(id) {
  return knex('shroom_parts')
    .where({ id })
    .first()
}

module.exports = {
  get,
  getType,
  getPart
}