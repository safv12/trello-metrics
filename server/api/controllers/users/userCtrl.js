'use strict';

var User = require('../../models/User.js');


function handleError (res, statusCode) {
  statusCode = statusCode || 500;
  return function (err) {
    res.status(statusCode).send(err);
  };
}


exports.getAllUsers = function (req, res) {
  User.findAll()
    .then(function (users) {
      res.status(200).send(users);
    }).catch(handleError(res));
};


exports.getUser = function (req, res) {
  User.findAll({ where: { _id: req.params.id } })
    .then(function (users) {
      res.status(200).send(users[0]);
    }).catch(handleError(res));
};


exports.newUser = function (req, res) {
  User.create(req.body)
    .then( function (user) {
      res.status(201).send(user.dataValues);
    }).catch(handleError(res));
};


exports.updateUser = function (req, res) {
  User.update( req.body, { where: { _id: req.params.id }})
  .then(function (updated) {
    res.status(200).send(updated);
  }).catch(handleError(res));
};


exports.deleteUser = function (req, res) {
  User.destroy({ where: { _id: req.params.id } })
  .then(function () {
    res.status(204).end();
  }).catch(handleError(res));
};
