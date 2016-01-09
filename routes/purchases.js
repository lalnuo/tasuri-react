var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', function(req, res, next) {
  console.log('FETCHING')
  models.Purchase.findAll().then(purchases => res.json(purchases));
});

router.post('/', function(req, res, next) {
  var purchase = {
    name: req.body.name,
    price: req.body.price,
    UserId: req.body.userId
  }
  models.Purchase.create(purchase).then(purchase => {
    res.json(purchase);
  }).catch(() => console.log('Failed'));
});

router.delete('/:id', function(req, res, next) {
  models.Purchase.destroy({where: {id: req.params.id}});
})

module.exports = router;
