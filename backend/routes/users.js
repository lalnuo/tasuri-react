var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {
  models.User.findAll().then(users => res.json(users))
});

module.exports = router;
