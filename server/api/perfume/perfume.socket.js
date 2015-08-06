/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Perfume = require('./perfume.model');

exports.register = function(socket) {
  Perfume.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Perfume.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('perfume:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('perfume:remove', doc);
}