// Change url column name to path

exports.up = function(knex, Promise) {
  return knex.schema.table('shroom_parts', table => {
    table.renameColumn('url', 'path')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.table('shroom_parts', table => {
    table.renameColumn('path', 'url')
  })
}
