
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('game', function(table) {
      table.increments('id')
      table.string('name')
      table.string('developer')
      table.float('rating')
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
        knex.schema.dropTable('game')
    ])
};
