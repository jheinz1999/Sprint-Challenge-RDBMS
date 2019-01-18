
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', tbl => {

    // primary key: id, increments

    tbl.increments();

    // Other keys

    tbl.string('name', 65).unique().notNullable();
    tbl.text('description');
    tbl.boolean('completed').notNullable();

  });
};

exports.down = function(knex, Promise) {

  return knex.schema.dropTableIfExists('projects');

};
