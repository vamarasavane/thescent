/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Olfactory = require('./olfactory.model');

exports.register = function(socket) {
  Olfactory.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Olfactory.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('olfactory:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('olfactory:remove', doc);
}