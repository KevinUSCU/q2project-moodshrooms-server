exports.seed = function(knex, Promise) {
  // Inserts shroom parts; this will be used for dev *and* production setup
  return knex('shroom_parts').insert([
    { id: 1, description: 'None', type: 'none', path: '' },
    { id: 2, description: 'Legs', type: 'base', path: 'images/shroom-parts/base_001.png' },
    { id: 3, description: 'Thin', type: 'base', path: 'images/shroom-parts/base_002.png' },
    { id: 4, description: 'Wide', type: 'base', path: 'images/shroom-parts/base_003.png' },
    { id: 5, description: 'Tall', type: 'cap', path: 'images/shroom-parts/cap_001.png' },
    { id: 6, description: 'Wide', type: 'cap', path: 'images/shroom-parts/cap_002.png' },
    { id: 7, description: 'Googly', type: 'eyeballs', path: 'images/shroom-parts/eyeballs_001.png' },
    { id: 8, description: 'Crossed', type: 'eyeballs', path: 'images/shroom-parts/eyeballs_002.png' },
    { id: 9, description: 'Spaced', type: 'eyeballs', path: 'images/shroom-parts/eyeballs_003.png' },
    { id: 10, description: 'Relaxed', type: 'eyebrows', path: 'images/shroom-parts/eyebrows_001.png' },
    { id: 11, description: 'Small', type: 'eyes', path: 'images/shroom-parts/eyes_001.png' },
    { id: 12, description: 'Large', type: 'eyes', path: 'images/shroom-parts/eyes_002.png' },
    { id: 13, description: 'Spots', type: 'flourish', path: 'images/shroom-parts/flourish_001.png' },
    { id: 14, description: 'Frown', type: 'mouth', path: 'images/shroom-parts/mouth_001.png' },
    { id: 15, description: 'Smile', type: 'mouth', path: 'images/shroom-parts/mouth_002.png' }
  ])
  .then(() => {
    return knex.raw(`SELECT setval('shroom_parts_id_seq', (SELECT MAX(id) FROM shroom_parts));`)
  })
}
