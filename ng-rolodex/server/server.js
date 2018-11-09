const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors');
const PORT = process.env.EXPRESS_CONTAINER_PORT || 9000;
const Users = require('./db/models/users.js')
const Contacts = require('./db/models/contacts.js')

app.use(bodyParser.urlencoded({extended : true }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.json('hello')
})

//get user by id
app.get('/users/:user_id', (req, res) => {
const { user_id } = req.params
console.log('req params', req.params)
Users
.where( {user_id})
.fetchAll()
.then( items => {
  res.json(items.serialize());
})
.catch( err => {
  console.log('error', err);
})
})

//get all users
app.get('/users', (req, res) => {
  console.log('users route called in express')
  Users
  .fetchAll()
  .then( items => {
    res.json(items.serialize());
  }) 
  .catch( err => {
    console.log('error', err);
    res.json(err)
  })
});


// get all contacts
app.get('/contacts', (req, res) => {
  console.log('get all contacts fired');
  Contacts
  .fetchAll()
  .then( contactItems => {
    res.json(contactItems.serialize());
  })
  .catch( err => {
    console.log('error', err);
  })
})

//post new add contact form
app.post('/newContact', (req, res) => {
  console.log('req.body', req.body)
  const newContact = {
    name: req.body.name,
    address: req.body.address,
    mobile: req.body.mobile,
    work: req.body.work,
    home: req.body.home,
    email: req.body.email,
    twitter: req.body.twitter,
    instagram: req.body.instagram,
    github: req.body.github

  }
  console.log('newContact from server', newContact)

  Contacts
    .forge(newContact)
    .save()
    .then(() => {
      return Contacts.fetchAll()
    })
    .then(allContacts => {
      console.log(allContacts);
      res.json(allContacts.serialize());
    })
    .catch(err => {
      console.log('err', err)
    })
})


//delete contact
app.delete('/deleteContact/:contacts_id', (req, res) => {
  let { contacts_id } = req.params;
  console.log('req params', req.params)
  Contacts
  .where({ contacts_id })
  .destroy()
  .then(() => {
    return Contacts
    .fetchAll()
    .then( deleteResult => {
      res.json(deleteResult.serialize())
    })
    .catch(err => {
      console.log('err', err)
    })
  })
})

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`)
})
