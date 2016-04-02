'use strict';

var express = require('express');
var Metrics = require('./metricsCtrl.js');

var router = express.Router();

router.post('/', Metrics.getMetrics);

module.exports = router;
