'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PlaceSchema = new Schema({
  name: {
    type: String
  },
  value: {
    type: String
  },
  lights: {
    type:Array,
    es_type:'string',
    es_indexed: true
  },
  period_created: {
    type: Date,
    default: Date.now
  }
});



module.exports = mongoose.model('Place', PlaceSchema);
