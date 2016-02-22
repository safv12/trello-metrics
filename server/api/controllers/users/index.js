'use strict';

var express = require('express');
var ctrl = require('./userCtrl.js');

var router = express.Router();

router.post('/', ctrl.newUser);
router.get('/', ctrl.getAllUsers);
router.get('/:id', ctrl.getUser);
router.put('/:id', ctrl.updateUser);
router.delete('/:id', ctrl.deleteUser);

module.exports = router;
