exports.up = function(knex, Promise) {
  return knex.schema.createTable('shroom_parts', table => {
    table.increments()
    table.string('description').notNullable().defaultTo('')
    table.string('type').notNullable().defaultTo('')
    table.string('url').notNullable().defaultTo('')
    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('shroom_parts')
}
