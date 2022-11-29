/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTableIfNotExists('does_table',table =>{
    table.increments('id')
    table.string('name').notNullable()
    table.string('start_at').notNullable()
    table.string('end_at').notNullable()
    table.string('link').notNullable()
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex('does_table').drop()
};
