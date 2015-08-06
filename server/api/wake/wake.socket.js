/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Wake = require('./wake.model');

exports.register = function(socket) {
  Wake.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Wake.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('wake:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('wake:remove', doc);
}