/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Sound = require('./sound.model');

exports.register = function(socket) {
  Sound.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Sound.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('sound:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('sound:remove', doc);
}