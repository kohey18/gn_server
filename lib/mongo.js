var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Schema = new Schema({
    file      :String,
    thumbnail : String,
    is_live : Boolean,
    createdAt      : { type: Date, default: Date.now }
});

var Live = mongoose.model('Live', Schema);

module.exports = {
    'Live': Live
}
