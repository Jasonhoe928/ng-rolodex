const express = require('express');
const bodyParser = require('body-Parser')
const app = express();
const cors = require('cors');
const PORT = process.env.EXPRESS_CONTAINER_PORT || 9000;
const Users = require('./db/models/users.js')

app.use(bodyParser.urlencoded({extended : true }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.json('hello')
})

app.get('/users/:user_id', (req, res) => {
const { user_id } = req.params
console.log('req params', req.params)
Users
.where( {user_id})
.fetchAll()
.then( items => {
  res.json(items.serialize())
})
.catch( err => {
  console.log('error', err);
})
})


app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`)
})
