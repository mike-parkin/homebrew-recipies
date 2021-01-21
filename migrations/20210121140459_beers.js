
exports.up = function(knex) {
  return knex.schema.createTable('beers', table => {
      table.increments('id').primary()
      table.string('name')
      table.string('style')
      table.decimal('abv') 
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('beers')
};
