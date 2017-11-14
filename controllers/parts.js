const { Part } = require('../models')

function get (req, res, next) {
  const type = req.query.type
  if (type) {
    return Part.getType(type)
      .then(parts => {
        if (parts.length > 0) res.json(parts)
        else next({ status: 404, error: `Error 404: ${type} is not a moodshroom part type!`})
      })
  }
  Part.get()
    .then(parts => {
      res.json(parts)
    })
}

function getPart (req, res, next) {
  const id = req.params.id
  Part.getPart(id)
    .then(part => {
      if (part) res.json(part)
      else next({ status: 404, error: `Error 404: That's not a moodshroom part!` })
    })
}

module.exports = {
  get,
  getPart
}
