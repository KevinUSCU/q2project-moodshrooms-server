const knex = require('../db/connection')

function deleteShared(shroom_id) {
  return knex('shared_shrooms')
  .where({ shroom_id })
  .del()
}

module.exports = {
  deleteShared
}