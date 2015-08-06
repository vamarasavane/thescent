'use strict';

var _ = require('lodash');
var Wake = require('./wake.model');

// Get list of wakes
exports.index = function(req, res) {
  Wake.find(function (err, wakes) {
    if(err) { return handleError(res, err); }
    return res.json(200, wakes);
  });
};

// Get a single wake
exports.show = function(req, res) {
  Wake.findById(req.params.id, function (err, wake) {
    if(err) { return handleError(res, err); }
    if(!wake) { return res.send(404); }
    return res.json(wake);
  });
};

// Creates a new wake in the DB.
exports.create = function(req, res) {
  Wake.create(req.body, function(err, wake) {
    if(err) { return handleError(res, err); }
    return res.json(201, wake);
  });
};

// Updates an existing wake in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Wake.findById(req.params.id, function (err, wake) {
    if (err) { return handleError(res, err); }
    if(!wake) { return res.send(404); }
    var updated = _.merge(wake, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, wake);
    });
  });
};

// Deletes a wake from the DB.
exports.destroy = function(req, res) {
  Wake.findById(req.params.id, function (err, wake) {
    if(err) { return handleError(res, err); }
    if(!wake) { return res.send(404); }
    wake.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}