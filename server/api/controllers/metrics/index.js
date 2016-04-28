'use strict';

var express = require('express');
var Metrics = require('./metricsCtrl.js');
var Cycletime = require('../kanban-metrics/cycleTimeCtrl.js');

var router = express.Router();

router.post('/', Metrics.getMetrics);
router.post('/cycletime', Cycletime.saveCycleTime);

router.get('/cycletime', Cycletime.getAllCycleTimes);

module.exports = router;
