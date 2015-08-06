/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Texture = require('./texture.model');

exports.register = function(socket) {
  Texture.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Texture.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('texture:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('texture:remove', doc);
}