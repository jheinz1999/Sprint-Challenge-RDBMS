
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('action_contexts').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('action_contexts').insert([
        { action_id: 1, context_id: 1 },
        { action_id: 3, context_id: 5 },
        { action_id: 3, context_id: 2 },
        { action_id: 4, context_id: 3 },
        { action_id: 4, context_id: 1 },
      ]);
    });
};
