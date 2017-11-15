const { Shroom, Part } = require('../models')

function get (req, res, next) {
  Shroom.get()
    .then(shrooms => {
      let promises = shrooms.map(shroom => attachParts(shroom))
      Promise.all(promises)
        .then(result => res.json(result))
    })
}

function getShroom (req, res, next) {
  const id = req.params.id
  Shroom.getShroom(id)
    .then(shroom => {
      if (!shroom) return next({ status: 404, error: `Error 404: That's not a valid moodshroom!` })
      attachParts(shroom)
        .then(result => res.json(result))
    })
}

function attachParts(shroom) {
  let promises = [
    Part.getPart(shroom.cap),
    Part.getPart(shroom.base),
    Part.getPart(shroom.mouth),
    Part.getPart(shroom.eyes),
    Part.getPart(shroom.eyeballs),
    Part.getPart(shroom.eyebrows),
    Part.getPart(shroom.flourish)
  ]
  return Promise.all(promises)
    .then(result => {
      shroom.cap = result[0].path
      shroom.base = result[1].path
      shroom.mouth = result[2].path
      shroom.eyes = result[3].path
      shroom.eyeballs = result[4].path
      shroom.eyebrows = result[5].path
      shroom.flourish = result[6].path
      return shroom
    })
}

module.exports = {
  get,
  getShroom
}
