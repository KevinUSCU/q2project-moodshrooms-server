exports.up = function(knex, Promise) {
  return knex.schema.createTable('shrooms', table => {
    table.increments()
    table.integer('owner_id').notNullable()
    table.foreign('owner_id').references('users.id')
    table.string('name').notNullable().defaultTo('')
    table.integer('cap').notNullable()
    table.foreign('cap').references('shroom_parts.id')
    table.integer('base').notNullable()
    table.foreign('base').references('shroom_parts.id')
    table.integer('mouth').notNullable().defaultTo(1)
    table.foreign('mouth').references('shroom_parts.id')
    table.integer('eyes').notNullable().defaultTo(1)
    table.foreign('eyes').references('shroom_parts.id')
    table.integer('eyeballs').notNullable().defaultTo(1)
    table.foreign('eyeballs').references('shroom_parts.id')
    table.integer('eyebrows').notNullable().defaultTo(1)
    table.foreign('eyebrows').references('shroom_parts.id')
    table.integer('flourish').notNullable().defaultTo(1)
    table.foreign('flourish').references('shroom_parts.id')
    table.string('cap_color_1', 7).notNullable().defaultTo('')
    table.string('cap_color_2', 7).notNullable().defaultTo('')
    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('shrooms')
}
