'use strict';

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}


exports.getCycleTime = function(req, res) {
  res.status(200).send(req.body);
};
