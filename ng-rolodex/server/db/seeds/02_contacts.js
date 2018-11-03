exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('contacts').del()
  .then(function () {
    // Inserts seed entries
    return knex('contacts').insert([
      {
        name: 'Someone 1'
      },
      {
        name: 'Name 2'
      },
      {
        name: 'Name 3'
      }
    ]);
  });
};