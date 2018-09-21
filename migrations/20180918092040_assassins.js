
exports.up = function(knex, Promise) {
    return knex.schema.createTable('assassins', function(table){ 
       table.increments('id');
       table.string('photo')
        table.string('full_name');
        table.string('code_names');
        table.string('weapon');
        table.string('contact_info');
        table.integer('age');
        table.integer('price');
        table.decimal('rating');
        table.integer('kills');
        
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('assassins');
};
