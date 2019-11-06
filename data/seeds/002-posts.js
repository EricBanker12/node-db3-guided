
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('posts').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {user_id: 1, contents: 'rowValue1'},
        {user_id: 2, contents: 'rowValue2'},
        {user_id: 3, contents: 'rowValue3'}
      ]);
    });
};
