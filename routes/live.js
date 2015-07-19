var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Schema = new Schema({
    file      :String,
    thumbnail : String,
    is_live : Boolean,
    createdAt      : { type: Date, default: Date.now }
});

var Live = mongoose.model('Live', Schema);

router.get('/', function(req, res, next) {
    Live.find({}, function(err, results) {
        res.json({result: results});
    });
})


router.post('/new', function(req, res, next) {
    var live = new Live();
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
