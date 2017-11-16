const { Shroom, Part } = require('../models')

function get (req, res, next) {
  Shroom.get()
  .then(shrooms => res.json(shrooms))
}

function getShroom (req, res, next) {
  const id = req.params.id
  Shroom.getShroom(id)
  .then(shroom => {
    if (!shroom) return next({ status: 404, error: `Error 404: That's not a valid moodshroom!` })
    return res.json(shroom)
  })
}

function createShroom(req, res, next) {
  console.log(req.body)
  const { owner_id, name, cap, base, mouth, eyes, eyeballs, eyebrows, flourish, cap_color_1, cap_color_2 } = req.body
  Shroom.createShroom(owner_id, name, cap, base, mouth, eyes, eyeballs, eyebrows, flourish, cap_color_1, cap_color_2)
  .then(result => res.status(201).json({ id: result[0].id }))
}

module.exports = {
  get,
  getShroom,
  createShroom
}
