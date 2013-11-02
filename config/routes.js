
module.exports = function(app) {


  var cars = require('../app/controllers/cars');
  app.get('/cars', cars.all);
  app.put('/cars/:carId', cars.update);



  //Home route
  var index = require('../app/controllers/index');
  app.get('/', index.render);

};