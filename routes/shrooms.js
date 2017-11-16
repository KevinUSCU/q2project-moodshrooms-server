const express = require('express')
const router = express.Router()
const { ShroomsController: ctrl } = require('../controllers')

router.get('/', ctrl.get)
router.get('/:id', ctrl.getShroom)
router.post('/', ctrl.createShroom)
router.put('/:id', ctrl.updateShroom)
router.delete('/:id', ctrl.deleteShroom)

module.exports = router
