const bookshelf = require('./bookshelf')

const Contacts = bookshelf.Model.extend({
  tableName: 'contacts',
  hasTimestamps: true
})

module.exports = Contacts