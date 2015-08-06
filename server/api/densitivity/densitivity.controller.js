'use strict';

var _ = require('lodash');
var Densitivity = require('./densitivity.model');

// Get list of densitivitys
exports.index = function(req, res) {
  Densitivity.find(function (err, densitivitys) {
    if(err) { return handleError(res, err); }
    return res.json(200, densitivitys);
  });
};

// Get a single densitivity
exports.show = function(req, res) {
  Densitivity.findById(req.params.id, function (err, densitivity) {
    if(err) { return handleError(res, err); }
    if(!densitivity) { return res.send(404); }
    return res.json(densitivity);
  });
};

// Creates a new densitivity in the DB.
exports.create = function(req, res) {
  Densitivity.create(req.body, function(err, densitivity) {
    if(err) { return handleError(res, err); }
    return res.json(201, densitivity);
  });
};

// Updates an existing densitivity in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Densitivity.findById(req.params.id, function (err, densitivity) {
    if (err) { return handleError(res, err); }
    if(!densitivity) { return res.send(404); }
    var updated = _.merge(densitivity, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, densitivity);
    });
  });
};

// Deletes a densitivity from the DB.
exports.destroy = function(req, res) {
  Densitivity.findById(req.params.id, function (err, densitivity) {
    if(err) { return handleError(res, err); }
    if(!densitivity) { return res.send(404); }
    densitivity.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}