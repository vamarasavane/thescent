'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var mongoosastic = require("mongoosastic");


var PerfumeSchema = new Schema({
  name: {
    type: String,
    index: true,
    es_indexed: true
  },
  brand: {
    type: String,
    index: true,
    es_indexed: true
  },
  thumb: {
    type: String,
    index: true,
    es_indexed: true
  },
  picture: {
    type: String,
    index: true
  },
  description: {
    type: String,
    index: true,
    es_indexed: true
  },
  price: {
    type: Number,
    index: true,
    es_indexed: true
  },
  gender: {
    type: String,
    index: true,
    es_indexed: true
  },
  colors: {
    type:Array,
    es_type:'string',
    es_indexed: true
  },
  places: {
    type:Array,
    es_type:'string',
    es_indexed: true
  },
  lights: {
    type:Array,
    es_type:'string',
    es_indexed: true
  },
  tastes: {
    type:Array,
    es_type:'string',
    es_indexed: true
  },
  sounds: {
    type:Array,
    es_type:'string',
    es_indexed: true
  },
  levels: {
    type:Array,
    es_type:'string',
    es_indexed: true
  },
  textures: {
    type:Array,
    es_type:'string',
    es_indexed: true
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
  olfactorys: {
    type:Array,
    es_type:'string',
    es_indexed: true
  },
  wakes: {
    type:Array,
    es_type:'string',
    es_indexed: true
  },
  url_detail: {
    type: String,
    index: true,
    es_indexed: true
  },
  period_created: {
    type: Date,
    default: Date.now,
    es_type: 'date',
    es_indexed: true
  }
});


PerfumeSchema.plugin(mongoosastic);
module.exports = mongoose.model('Perfume', PerfumeSchema);
