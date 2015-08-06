'use strict';

var _ = require('lodash');
var Sensitivity = require('./sensitivity.model');

// Get list of sensitivitys
exports.index = function(req, res) {
  Sensitivity.find(function (err, sensitivitys) {
    if(err) { return handleError(res, err); }
    return res.json(200, sensitivitys);
  });
};

// Get a single sensitivity
exports.show = function(req, res) {
  Sensitivity.findById(req.params.id, function (err, sensitivity) {
    if(err) { return handleError(res, err); }
    if(!sensitivity) { return res.send(404); }
    return res.json(sensitivity);
  });
};

// Creates a new sensitivity in the DB.
exports.create = function(req, res) {
  Sensitivity.create(req.body, function(err, sensitivity) {
    if(err) { return handleError(res, err); }
    return res.json(201, sensitivity);
  });
};

// Updates an existing sensitivity in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Sensitivity.findById(req.params.id, function (err, sensitivity) {
    if (err) { return handleError(res, err); }
    if(!sensitivity) { return res.send(404); }
    var updated = _.merge(sensitivity, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, sensitivity);
    });
  });
};

// Deletes a sensitivity from the DB.
exports.destroy = function(req, res) {
  Sensitivity.findById(req.params.id, function (err, sensitivity) {
    if(err) { return handleError(res, err); }
    if(!sensitivity) { return res.send(404); }
    sensitivity.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}