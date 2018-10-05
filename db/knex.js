const env = process.env.NODE_ENV || 'development';
const config = require('../knexfile.js')[env];
let knex = require('knex')(config);
console.log(config);
module.exports = knex;