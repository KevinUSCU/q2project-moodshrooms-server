const express = require('express')
const router = express.Router()
const { UsersController: ctrl } = require('../controllers')

router.get('/', ctrl.getAllUsers)
router.post('/', ctrl.createUser)
router.post('/:username', ctrl.verifyUserByUsername)

module.exports = router