
exports.up = function(knex) {
  return knex.schema.createTable('beers_yeasts', table => {
      table.increments('id').primary()
      table.integer('beer_id')
      table.integer('yeast_id')
      table.string('amount')
  })
};

exports.down = function(knex) {
  return knmex.schema.dropTable('beers_yeasts')
};
