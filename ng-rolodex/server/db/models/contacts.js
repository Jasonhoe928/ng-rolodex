const bookshelf = require('./bookshelf')

const Contacts = bookshelf.Model.extend({
  tableName: 'contacts',
  idAttribute: 'contacts_id',
  hasTimestamps: true
})

module.exports = Contacts