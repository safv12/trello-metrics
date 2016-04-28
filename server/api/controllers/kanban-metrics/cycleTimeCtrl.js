'use strict';

var Cycletime = require('../../models/Cycletime.js');

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}


exports.saveCycleTime = function (req, res) {
  Cycletime.create(req.body)
  .then( function(cycletime) {
    res.status(201).send(cycletime.dataValues);
  }).catch(handleError(res));
};


exports.getAllCycleTimes = function(req, res) {
  Cycletime.findAll().then(function(cycletimes) {
    res.status(200).send(cycletimes);
  }).catch(handleError(res));
};
