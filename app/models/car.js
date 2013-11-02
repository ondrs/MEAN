/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    config = require('../../config/config'),
    Schema = mongoose.Schema;



var CarSchema = new Schema({}, { strict: false });


mongoose.model('Car', CarSchema);