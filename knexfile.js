const path = require('path')

// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgress://localhost:5432/moodshrooms_dev',
    migrations: {
      directory: path.join(__dirname, 'db', 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'db', 'dev_seeds')
    }
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, 'db', 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'db', 'prod_seeds')
    }
  }

}
