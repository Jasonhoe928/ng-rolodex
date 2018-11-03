exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
  .then(function () {
    // Inserts seed entries
    return knex('users').insert([
      {
        username: 'Username 1',
        name: 'Name 1',
        email: 'nigel@email.com',
        address: '123 Somewhere'
      },
      {
        username: 'Username 2',
        name: 'Name 2',
        email: 'nigeasdfl@email.com',
        address: '123 Nowhere'
      },
      {
        username: 'Username 3',
        name: 'Name 3',
        email: 'nigeererl@email.com',
        address: '123 Anywhere'
      }
    ]);
  });
};