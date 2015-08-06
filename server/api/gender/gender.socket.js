/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Gender = require('./gender.model');

exports.register = function(socket) {
  Gender.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Gender.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('gender:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('gender:remove', doc);
}