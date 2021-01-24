
exports.up = function(knex) {
  return knex.schema,createTable('yeasts', table => {
    table.increments('id').primary()
    table.string('producer')
    table.string('name')
    table.string('strain')
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('yeasts')
};
