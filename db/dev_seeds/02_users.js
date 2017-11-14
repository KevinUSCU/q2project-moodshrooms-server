exports.seed = function(knex, Promise) {
  // Inserts sample users
  return knex('users').insert([
    { id: 1, username: 'Kevin', key: 'password' },
    { id: 2, username: 'Sarah', key: 'password' },
    { id: 3, username: 'John Doe', key: 'password' }
  ])
  .then(() => {
    return knex.raw(`SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));`)
  })
}
