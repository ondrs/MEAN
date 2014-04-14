/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    config = require('../../config/config'),
    Schema = mongoose.Schema;



var VehicleSchema = new Schema({}, { strict: false });


mongoose.model('Vehicle', VehicleSchema);
