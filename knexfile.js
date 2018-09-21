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
    connection: {
      database: 'postgres://yiklqhfdxxznjc:0a35b35b0f957bba7071b0f37cdab45ccf54ddd85222d4f6eb7f5ec048311054@ec2-54-225-241-25.compute-1.amazonaws.com:5432/daj9rclcmg2db0',
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

}