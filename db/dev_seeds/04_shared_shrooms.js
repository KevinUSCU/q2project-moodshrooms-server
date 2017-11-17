exports.seed = function(knex, Promise) {
  // Sets up some shrooms shared amongst multiple users
  return knex('shared_shrooms').insert([
    { user_id: 1, shroom_id: 2 },
    { user_id: 2, shroom_id: 1 },
    { user_id: 3, shroom_id: 1 },
    { user_id: 1, shroom_id: 6 },
    { user_id: 2, shroom_id: 1 },
    { user_id: 3, shroom_id: 5 }
  ])
}
