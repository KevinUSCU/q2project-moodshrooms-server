const express = require('express')
const router = express.Router()
const { PartsController: ctrl } = require('../controllers')

router.get('/', ctrl.get) //get all parts
router.get('/:id', ctrl.getPart) //get a specific part

module.exports = router
