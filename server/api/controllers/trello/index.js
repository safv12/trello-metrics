'use strict';

var express = require('express');
var Trello = require('./trelloCtrl.js');

var router = express.Router();

router.post('/me/boards', Trello.getBoards);
router.get('/boards/:board/lists', Trello.getLists);

module.exports = router;
