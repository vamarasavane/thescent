/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Sensitivity = require('./sensitivity.model');

exports.register = function(socket) {
  Sensitivity.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Sensitivity.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('sensitivity:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('sensitivity:remove', doc);
}