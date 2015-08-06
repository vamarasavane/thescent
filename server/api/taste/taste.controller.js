'use strict';

var _ = require('lodash');
var Taste = require('./taste.model');

// Get list of tastes
exports.index = function(req, res) {
  Taste.find(function (err, tastes) {
    if(err) { return handleError(res, err); }
    return res.json(200, tastes);
  });
};

// Get a single taste
exports.show = function(req, res) {
  Taste.findById(req.params.id, function (err, taste) {
    if(err) { return handleError(res, err); }
    if(!taste) { return res.send(404); }
    return res.json(taste);
  });
};

// Creates a new taste in the DB.
exports.create = function(req, res) {
  Taste.create(req.body, function(err, taste) {
    if(err) { return handleError(res, err); }
    return res.json(201, taste);
  });
};

// Updates an existing taste in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Taste.findById(req.params.id, function (err, taste) {
    if (err) { return handleError(res, err); }
    if(!taste) { return res.send(404); }
    var updated = _.merge(taste, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, taste);
    });
  });
};

// Deletes a taste from the DB.
exports.destroy = function(req, res) {
  Taste.findById(req.params.id, function (err, taste) {
    if(err) { return handleError(res, err); }
    if(!taste) { return res.send(404); }
    taste.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}