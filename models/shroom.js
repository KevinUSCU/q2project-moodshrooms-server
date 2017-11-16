const knex = require('../db/connection')

function get() {
  return knex('shrooms')
}

function getShroom(id) {
  return knex('shrooms')
  .where({ id })
  .first()
}

function createShroom(owner_id, name, cap, base, mouth, eyes, eyeballs, eyebrows, flourish, cap_color_1, cap_color_2) {
  return knex('shrooms')
  .insert({ owner_id, name, cap, base, mouth, eyes, eyeballs, eyebrows, flourish, cap_color_1, cap_color_2 })
  .returning(['id'])
}

module.exports = {
  get,
  getShroom,
  createShroom
}