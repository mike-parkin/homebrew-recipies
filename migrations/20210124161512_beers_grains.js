
exports.up = function(knex) {
  return knex.schema.createTable('beers_grains', table => {
      table.increments('id').primary()
      table.integer('beer_id')
      table.integer('grain_id')
      table.decimal('amount')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('beers_grains')
};
