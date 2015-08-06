'use strict';

var _ = require('lodash');
var Perfume = require('./perfume.model');

// Get list of perfumes
exports.index = function(req, res) {
  Perfume.find(function (err, perfumes) {
    if(err) { return handleError(res, err); }
    return res.json(200, perfumes);
  });
};

// Get a single perfume
exports.show = function(req, res) {
  Perfume.findById(req.params.id, function (err, perfume) {
    if(err) { return handleError(res, err); }
    if(!perfume) { return res.send(404); }
    return res.json(perfume);
  });
};

// Creates a new perfume in the DB.
exports.create = function(req, res) {
  Perfume.create(req.body, function(err, perfume) {
    if(err) { return handleError(res, err); }
    return res.json(201, perfume);
  });
};

// Updates an existing perfume in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Perfume.findById(req.params.id, function (err, perfume) {
    if (err) { return handleError(res, err); }
    if(!perfume) { return res.send(404); }
    var updated = _.merge(perfume, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, perfume);
    });
  });
};

// Deletes a perfume from the DB.
exports.destroy = function(req, res) {
  Perfume.findById(req.params.id, function (err, perfume) {
    if(err) { return handleError(res, err); }
    if(!perfume) { return res.send(404); }
    perfume.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
