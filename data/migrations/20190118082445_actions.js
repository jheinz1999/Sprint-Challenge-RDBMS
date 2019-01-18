
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', tbl => {

    // primary key: id, increments

    tbl.increments();

    // Other keys

    tbl.string('description', 65).notNullable();
    tbl.text('notes');
    tbl.boolean('completed').notNullable();

    // Foreign keys

    tbl.integer('project_id').unsigned().references('id').inTable('projects').notNullable();

  });
};

exports.down = function(knex, Promise) {

  return knex.schema.dropTableIfExists('actions');

};
