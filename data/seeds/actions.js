
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {description: 'Get parts', notes: 'they have to be good', completed: false, project_id: 1},
        {description: 'Assemble them', completed: false, project_id: 1},
        {description: 'Profit', completed: false, project_id: 1},
        {description: 'Get ingredients', notes: 'make sure they are from walmart', completed: true, project_id: 2},
        {description: 'Cook ingredients', notes: 'Cook for three and a half centuries', completed: true, project_id: 2},
      ]);
    });
};
