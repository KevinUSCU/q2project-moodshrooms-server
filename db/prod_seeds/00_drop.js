exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries in reverse FK order
  return knex('shroom_parts').del()
}
