
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Build a PC', description: 'steps to build PC', completed: false},
        {name: 'Make a pizza', description: 'steps to make awesome pizzas', completed: true}
      ]);
    });
};
