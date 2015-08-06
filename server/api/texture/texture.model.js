'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var mongoosastic = require("mongoosastic");

var TextureSchema = new Schema({
  name: {
    type: String
  },
  value: {
    type: String
  },
  sensitivitys: {
    type:Array,
    es_type:'string',
    es_indexed: true
  },
  densitivitys: {
    type:Array,
    es_type:'string',
    es_indexed: true
  },
  period_created: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Texture', TextureSchema);
