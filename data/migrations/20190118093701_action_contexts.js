
exports.up = function(knex, Promise) {
  return knex.schema.createTable('action_contexts', tbl => {

    // rows

    tbl.integer('context_id').notNullable().references('id').inTable('contexts');
    tbl.integer('action_id').notNullable().references('id').inTable('actions');

    // Primary key

    tbl.primary(['context_id', 'action_id']);

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('action_contexts');
};
