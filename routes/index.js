const express = require('express');
const router = express.Router();
const models = require('../models');
const dateUtils = require('../helper/dateUtils');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.post('/start', function (req, res) {

    const startTime = dateUtils.now();
    console.log("start time is " + startTime);

    models.records.create({
        startTime: startTime
    });

    res.send('done!');
});

router.get('/search/days/:days', function (req, res) {


    let d = dateUtils.now() - (req.params.days * dateUtils.secondsPerDay);

    models.records.findAll({
        where: {
            startTime: {
                [Op.gte]: d
            }

        }
    }).then(data => {
        res.send(data);
    });


});

module.exports = router;
