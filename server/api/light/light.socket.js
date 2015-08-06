/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Light = require('./light.model');

exports.register = function(socket) {
  Light.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Light.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('light:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('light:remove', doc);
}