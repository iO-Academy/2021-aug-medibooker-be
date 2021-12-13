const doctorController = require('../Controllers/doctorController');

function routes(app) {
  // Root route
  app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Medibooker Server</h1>');
  });

  app.get('/doctors', doctorController.getDoctors);
}

module.exports = routes;
