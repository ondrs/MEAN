
module.exports = function(app) {


  var vehicles = require('../app/controllers/vehicles');
  app.get('/vehicles', vehicles.all);
  app.put('/vehicles/:vehicleId', vehicles.update);



  //Home route
  var index = require('../app/controllers/index');
  app.get('/', index.render);

};
