// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/killbase'
    
  },

  // production: {
  //   client: 'pg',
  //   connection: process.env.DATABASE_URL + `?ssl=true`,
  //   migrations: {
  //     directory: './db/migrations'
  //   },
  //   useNullAsDefault: true
  // }
  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL + `?ssl=true`,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

}