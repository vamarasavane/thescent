'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

//var mongoosastic = require("mongoosastic");

var AuragramSchema = new Schema({
  name: {
    type: String
  },
  brand: {
    type: String
  },
  thumb: {
    type: String
  },
  data: {
    type: String
  },
  gender: {
    type: String
  },
  colors: {
    type:Array
  },
  places: {
    type:Array
  },
  lights: {
    type:Array
  },
  tastes: {
    type:Array
  },
  sounds: {
    type:Array
  },
  levels: {
    type:Array
  },
  sensitivitys: {
    type:Array
  },
  densitivitys: {
    type:Array
  },
  olfactorys: {
    type:Array
  },
  wakes: {
    type:Array
  },
  period_created: {
    type: Date,
    default: Date.now
  }
});

//AuragramSchema.plugin(mongoosastic);
module.exports = mongoose.model('Auragram', AuragramSchema);
