exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table.increments('user_id');
    table.string('username').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('address').notNullable();
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
}