var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')

router.get('/', function(req, res, next) {
    var Live = mongoose.model('Live');
    Live.find({}, function(err, results) {
        res.render('index', { lives: results });
    });
})

module.exports = router;
