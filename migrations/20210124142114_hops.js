
exports.up = function(knex) {
    return knex.schema.createTable('hops', table => {
        table.increments('id').primary()
        table.string('name')
        table.string('country')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('hops')
};
