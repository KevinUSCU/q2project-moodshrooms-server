const express = require('express')
const router = express.Router()
const { ShroomsController: ctrl } = require('../controllers')

router.get('/', ctrl.get)
router.get('/:id', ctrl.getShroom)

module.exports = router
