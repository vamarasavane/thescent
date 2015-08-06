'use strict';

var _ = require('lodash');
var Auragram = require('./auragram.model');

// Get list of auragrams
exports.index = function(req, res) {
  Auragram.find(function (err, auragrams) {
    if(err) { return handleError(res, err); }
    return res.json(200, auragrams);
  });
};

// Get a single auragram
exports.show = function(req, res) {
  Auragram.findById(req.params.id, function (err, auragram) {
    if(err) { return handleError(res, err); }
    if(!auragram) { return res.send(404); }
    return res.json(auragram);
  });
};

// Creates a new auragram in the DB.
exports.create = function(req, res) {
  Auragram.create(req.body, function(err, auragram) {
    if(err) { return handleError(res, err); }
    return res.json(201, auragram);
  });
};

// Updates an existing auragram in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Auragram.findById(req.params.id, function (err, auragram) {
    if (err) { return handleError(res, err); }
    if(!auragram) { return res.send(404); }
    var updated = _.merge(auragram, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, auragram);
    });
  });
};

// Deletes a auragram from the DB.
exports.destroy = function(req, res) {
  Auragram.findById(req.params.id, function (err, auragram) {
    if(err) { return handleError(res, err); }
    if(!auragram) { return res.send(404); }
    auragram.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}