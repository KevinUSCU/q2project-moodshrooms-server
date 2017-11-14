exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries in reverse FK order
  return knex('shared_shrooms').del()
  return knex('shrooms').del()
  return knex('users').del()
  return knex('shroom_parts').del()
}
