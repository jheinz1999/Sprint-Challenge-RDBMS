
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('contexts').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('contexts').insert([
        {name: 'At home'},
        { name: 'At the office'},
        { name: 'Eating a rice bowl'},
        { name: 'Casually chillin on your neighbor\'s roof'},
      ]);
    });
};
