
exports.up = function(knex) {
  return knex.schema.createTable('beers_hops', table => {
      table.increments('id').primary()
      table.integer('beer_id')
      table.integer('hop_id')
      table.decimal('total_amount')
      table.string('instructions')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('beers_hops')
};
