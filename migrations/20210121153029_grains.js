
exports.up = function(knex) {
  return knex.schema.createTAble('beers', table => {
      table.increments('id').primary()
      table.string('name')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('grains')
};
