const express = require('express');
const router = express.Router();
const models = require('../models');


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {title: 'Express'});
});

router.post('/start', function (req, res) {

  const startTime = req.body.startTime;
  console.log(startTime);

  models.records.create({
    startTime: startTime
  })

});

module.exports = router;
