'use strict';

var _ = require('lodash');
var Texture = require('./texture.model');

// Get list of textures
exports.index = function(req, res) {
  Texture.find(function (err, textures) {
    if(err) { return handleError(res, err); }
    return res.json(200, textures);
  });
};

// Get a single texture
exports.show = function(req, res) {
  Texture.findById(req.params.id, function (err, texture) {
    if(err) { return handleError(res, err); }
    if(!texture) { return res.send(404); }
    return res.json(texture);
  });
};

// Creates a new texture in the DB.
exports.create = function(req, res) {
  Texture.create(req.body, function(err, texture) {
    if(err) { return handleError(res, err); }
    return res.json(201, texture);
  });
};

// Updates an existing texture in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Texture.findById(req.params.id, function (err, texture) {
    if (err) { return handleError(res, err); }
    if(!texture) { return res.send(404); }
    var updated = _.merge(texture, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, texture);
    });
  });
};

// Deletes a texture from the DB.
exports.destroy = function(req, res) {
  Texture.findById(req.params.id, function (err, texture) {
    if(err) { return handleError(res, err); }
    if(!texture) { return res.send(404); }
    texture.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}