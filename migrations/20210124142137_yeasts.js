
exports.up = function(knex) {
  return knex.schema.createTable('yeasts', table => {
    table.increments('id').primary()
    table.string('brand')
    table.string('name')
    table.string('type')
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('yeasts')
};
