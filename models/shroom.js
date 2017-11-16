const knex = require('../db/connection')

function get() {
  return knex('shrooms')
}

function getAllOwnedByUser(owner_id) {
  return knex('shrooms')
  .where({ owner_id })
}

function getAllSharedWithUser(user_id) {
  return knex('shared_shrooms')
  .where({ user_id })
  .join('shrooms', 'shroom_id', 'shrooms.id')
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

function updateShroom(id, owner_id, name, cap, base, mouth, eyes, eyeballs, eyebrows, flourish, cap_color_1, cap_color_2) {
  return knex('shrooms')
  .where({ id })
  .update({ owner_id, name, cap, base, mouth, eyes, eyeballs, eyebrows, flourish, cap_color_1, cap_color_2, thisKeyIsSkipped: undefined })
  .returning(['name'])
}

function deleteShroom(id) {
  return knex('shrooms')
  .where({ id })
  .del()
}

module.exports = {
  get,
  getShroom,
  getAllOwnedByUser,
  getAllSharedWithUser,
  createShroom,
  updateShroom,
  deleteShroom
}