var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var mongo = require('../lib/mongo');

router.get('/', function(req, res, next) {
    var Live = mongoose.model('Live');
    Live.find({}, function(err, results) {
        res.json({result: results});
    });
})


router.post('/new', function(req, res, next) {
    var live = mongo.Live();
    var body = req.body;

    live.file = body.file;
    live.thumbnail = body.thumbnail;
    live.is_live = 1;

    live.save(function(err) {
        var status = 0;
        if (err) {
            status = 500;
        } else {
            status = 200;
        }
        res.json({status: status})
    });
});

module.exports = router;
