'use strict';

var express = require('express');
var ctrl = require('./userCtrl.js');

var router = express.Router();

router.delete('/:id', ctrl.deleteUser);
router.put('/:id', ctrl.updateUser);
router.get('/:id', ctrl.getUser);
router.get('/', ctrl.getAllUsers);
router.post('/', ctrl.newUser);

module.exports = router;
