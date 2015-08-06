'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var GenderSchema = new Schema({
  name: {
    type: String
  },
  value: {
    type: String
  },
  icon :{
    type:String
  },
  period_created: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongoose.model('Gender', GenderSchema);