exports.seed = function(knex, Promise) {
  // Sets up some shrooms shared amongst multiple users
  return knex('shared_shrooms').insert([
    { user_id: 2, shroom_id: 1 },
    { user_id: 2, shroom_id: 3 }
  ])
}
