/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Taste = require('./taste.model');

exports.register = function(socket) {
  Taste.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Taste.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('taste:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('taste:remove', doc);
}