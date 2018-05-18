const User = require('../models/userModels');
const bcrypt = require('bcrypt');

const createUser = (req, res) => {
  const { username, password } = req.body;
  // create user takes in the username and password and saves a user.
  // our pre save hook should kick in here saving this user to the DB with an encrypted password.
  User
    .create(req.body)
    .then(user => {
      res.status(201).json(req.body)
    })
    .catch(error => {
      res
        .status(401)
        .send('error: User could not be created')
    });
};

module.exports = {
  createUser
};
