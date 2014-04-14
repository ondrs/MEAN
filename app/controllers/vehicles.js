/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Vehicle = mongoose.model('Vehicle'),
    _ = require('underscore')
;


/**
 * Update a vehicle
 */
exports.update = function(req, res) {

  var vehicle = req.body;

  Vehicle.update({_id: vehicle._id}, { $push: { marks: vehicle.marks } }, function(err, result) {

    res.jsonp({success: result});

  });

};


/**
 * List of Vehicles
 */
exports.all = function(req, res) {
    Vehicle.find().exec(function(err, vehicles) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(vehicles);
        }
    });
};
