const env = process.env.NODE_ENV || 'development';
const config = require('../knexfile.js')[env];
let knex = require('knex')(config);

module.exports = knex;