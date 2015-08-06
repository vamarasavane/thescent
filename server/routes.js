/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');

module.exports = function(app) {

  // Insert routes below
  app.use('/api/wakes', require('./api/wake'));
  app.use('/api/olfactorys', require('./api/olfactory'));
  app.use('/api/levels', require('./api/level'));
  app.use('/api/densitivitys', require('./api/densitivity'));
  app.use('/api/sensitivitys', require('./api/sensitivity'));
  app.use('/api/lights', require('./api/light'));
  app.use('/api/places', require('./api/place'));
  app.use('/api/genders', require('./api/gender'));
  app.use('/api/sounds', require('./api/sound'));
  app.use('/api/tastes', require('./api/taste'));
  app.use('/api/colors', require('./api/color'));
  app.use('/api/textures', require('./api/texture'));
  app.use('/api/auragrams', require('./api/auragram'));
  app.use('/api/perfumes', require('./api/perfume'));
  app.use('/api/users', require('./api/user'));

  app.use('/auth', require('./auth'));

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};
