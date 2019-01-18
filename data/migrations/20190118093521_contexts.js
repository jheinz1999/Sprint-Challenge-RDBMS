
exports.up = function(knex, Promise) {
  return knex.schema.createTable('contexts', tbl => {

    tbl.increments();

    tbl.string('name', 65);

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.deleteTableIfExists('contexts');
};
