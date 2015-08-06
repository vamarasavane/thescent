/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Auragram = require('./auragram.model');

exports.register = function(socket) {
  Auragram.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Auragram.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('auragram:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('auragram:remove', doc);
}