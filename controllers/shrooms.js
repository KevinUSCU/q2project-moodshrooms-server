const { Shroom, Part } = require('../models')

function get (req, res, next) {
  // Use query string ?user=[user_id] to get all shrooms owned by user
  const user = req.query.user
  if (user) {
    return Shroom.getAllOwnedByUser(user)
    .then(shrooms => {
      if (shrooms.length > 0) res.json(shrooms)
      else next({ status: 404, error: `Error 404: ${user} is not a valid user!` })
    })
  }
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
  const { owner_id, name, cap, base, mouth, eyes, eyeballs, eyebrows, flourish, cap_color_1, cap_color_2 } = req.body
  Shroom.createShroom(owner_id, name, cap, base, mouth, eyes, eyeballs, eyebrows, flourish, cap_color_1, cap_color_2)
  .then(result => res.status(201).json({ id: result[0].id }))
}

function updateShroom(req, res, next) {
  const { owner_id, name, cap, base, mouth, eyes, eyeballs, eyebrows, flourish, cap_color_1, cap_color_2 } = req.body
  Shroom.updateShroom(req.params.id, owner_id, name, cap, base, mouth, eyes, eyeballs, eyebrows, flourish, cap_color_1, cap_color_2)
    .then(result => res.status(202).json({ name: result[0].name }))
}

function deleteShroom(req, res, next) {
  Shroom.deleteShroom(req.params.id)
  .then(result => res.status(204).send())
}

module.exports = {
  get,
  getShroom,
  createShroom,
  updateShroom,
  deleteShroom
}
