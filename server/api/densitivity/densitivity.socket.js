/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Densitivity = require('./densitivity.model');

exports.register = function(socket) {
  Densitivity.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Densitivity.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('densitivity:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('densitivity:remove', doc);
}