// Check node environment
const environment = process.env.NODE_ENV || 'development'

// Set up knex connection
const config = require('../knexfile')[environment]
const knex = require('knex')(config)

module.exports = knex