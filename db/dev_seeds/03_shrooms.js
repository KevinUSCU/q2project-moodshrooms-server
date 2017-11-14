
exports.seed = function(knex, Promise) {
  // Inserts sample saved moodshrooms
  return knex('shrooms').insert([
    { id: 1, owner_id: 1, name: 'Peppy', cap: 6, base: 2, mouth: 14, eyes: 11, eyeballs: 7, eyebrows: 1, flourish: 1, cap_color_1: '', cap_color_2: '' },
    { id: 2, owner_id: 2, name: 'Zippy', cap: 5, base: 3, mouth: 15, eyes: 11, eyeballs: 9, eyebrows: 10, flourish: 1, cap_color_1: '#531b93', cap_color_2: '' },
    { id: 3, owner_id: 3, name: 'Stinky', cap: 6, base: 2, mouth: 14, eyes: 12, eyeballs: 8, eyebrows: 1, flourish: 13, cap_color_1: '#ff9300', cap_color_2: '#0096ff' }
  ])
  .then(() => {
    return knex.raw(`SELECT setval('shrooms_id_seq', (SELECT MAX(id) FROM shrooms));`)
  })
}
