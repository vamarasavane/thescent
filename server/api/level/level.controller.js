'use strict';

var _ = require('lodash');
var Level = require('./level.model');

// Get list of levels
exports.index = function(req, res) {
  Level.find(function (err, levels) {
    if(err) { return handleError(res, err); }
    return res.json(200, levels);
  });
};

// Get a single level
exports.show = function(req, res) {
  Level.findById(req.params.id, function (err, level) {
    if(err) { return handleError(res, err); }
    if(!level) { return res.send(404); }
    return res.json(level);
  });
};

// Creates a new level in the DB.
exports.create = function(req, res) {
  Level.create(req.body, function(err, level) {
    if(err) { return handleError(res, err); }
    return res.json(201, level);
  });
};

// Updates an existing level in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Level.findById(req.params.id, function (err, level) {
    if (err) { return handleError(res, err); }
    if(!level) { return res.send(404); }
    var updated = _.merge(level, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, level);
    });
  });
};

// Deletes a level from the DB.
exports.destroy = function(req, res) {
  Level.findById(req.params.id, function (err, level) {
    if(err) { return handleError(res, err); }
    if(!level) { return res.send(404); }
    level.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}