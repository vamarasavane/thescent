'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var LightSchema = new Schema({
  name: {
    type: String
  },
  value: {
    type: String
  },
  period_created: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Light', LightSchema);
