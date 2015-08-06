'use strict';

var _ = require('lodash');
var Sound = require('./sound.model');

// Get list of sounds
exports.index = function(req, res) {
  Sound.find(function (err, sounds) {
    if(err) { return handleError(res, err); }
    return res.json(200, sounds);
  });
};

// Get a single sound
exports.show = function(req, res) {
  Sound.findById(req.params.id, function (err, sound) {
    if(err) { return handleError(res, err); }
    if(!sound) { return res.send(404); }
    return res.json(sound);
  });
};

// Creates a new sound in the DB.
exports.create = function(req, res) {
  Sound.create(req.body, function(err, sound) {
    if(err) { return handleError(res, err); }
    return res.json(201, sound);
  });
};

// Updates an existing sound in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Sound.findById(req.params.id, function (err, sound) {
    if (err) { return handleError(res, err); }
    if(!sound) { return res.send(404); }
    var updated = _.merge(sound, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, sound);
    });
  });
};

// Deletes a sound from the DB.
exports.destroy = function(req, res) {
  Sound.findById(req.params.id, function (err, sound) {
    if(err) { return handleError(res, err); }
    if(!sound) { return res.send(404); }
    sound.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}