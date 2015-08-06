'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SoundSchema = new Schema({
  name: {
    type: String
  },
  value: {
    type: String
  },
  icon :{
    type:String
  },
  levels: {
    type:Array
  },
  period_created: {
    type: Date,
    default:Date.now
  }
});

module.exports = mongoose.model('Sound', SoundSchema);
