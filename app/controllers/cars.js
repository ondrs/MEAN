/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Car = mongoose.model('Car'),
    _ = require('underscore')
;


/**
 * Update a car
 */
exports.update = function(req, res) {

  var car = req.body;

  Car.update({_id: car._id}, { $push: { marks: car.marks } }, function(err, result) {

    res.jsonp({success: result});

  });

};


/**
 * List of Cars
 */
exports.all = function(req, res) {
    Car.find().exec(function(err, cars) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(cars);
        }
    });
};