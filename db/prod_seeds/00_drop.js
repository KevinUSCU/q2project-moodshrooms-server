exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries in reverse FK order
  return knex('shared_shrooms').del()
    .then(() => knex('shrooms').del())
    .then(() => knex('users').del())
    .then(() => knex('shroom_parts').del())
}
