'use strict';

var express = require('express');
var Metrics = require('./metricsCtrl.js');

var router = express.Router();

router.post('/cycletime', Metrics.getCycleTime);

module.exports = router;
