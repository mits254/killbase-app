'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('full_name').unique().notNullable();
    table.string('email').unique().notNullable();
    table.specificType('password', 'char(60)').notNullable();
    
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};