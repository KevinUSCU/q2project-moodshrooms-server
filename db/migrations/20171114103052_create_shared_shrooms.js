exports.up = function(knex, Promise) {
  return knex.schema.createTable('shared_shrooms', table => {
    table.integer('user_id').notNullable()
    table.foreign('user_id').references('users.id')
    table.integer('shroom_id').notNullable()
    table.foreign('shroom_id').references('shrooms.id')
    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('shared_shrooms')
}
