'use strict';

var _ = require('lodash');
var Olfactory = require('./olfactory.model');

// Get list of olfactorys
exports.index = function(req, res) {
  Olfactory.find(function (err, olfactorys) {
    if(err) { return handleError(res, err); }
    return res.json(200, olfactorys);
  });
};

// Get a single olfactory
exports.show = function(req, res) {
  Olfactory.findById(req.params.id, function (err, olfactory) {
    if(err) { return handleError(res, err); }
    if(!olfactory) { return res.send(404); }
    return res.json(olfactory);
  });
};

// Creates a new olfactory in the DB.
exports.create = function(req, res) {
  Olfactory.create(req.body, function(err, olfactory) {
    if(err) { return handleError(res, err); }
    return res.json(201, olfactory);
  });
};

// Updates an existing olfactory in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Olfactory.findById(req.params.id, function (err, olfactory) {
    if (err) { return handleError(res, err); }
    if(!olfactory) { return res.send(404); }
    var updated = _.merge(olfactory, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, olfactory);
    });
  });
};

// Deletes a olfactory from the DB.
exports.destroy = function(req, res) {
  Olfactory.findById(req.params.id, function (err, olfactory) {
    if(err) { return handleError(res, err); }
    if(!olfactory) { return res.send(404); }
    olfactory.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}