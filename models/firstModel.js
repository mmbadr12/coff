//const db = require('../config/database');
const mongoose = require('mongoose');

const One = new mongoose.Schema({

   title:{type:String,required:true},

   description:{type:String,required:true},

   location:{type:String,required:true},

   date:{type: Date, default: Date.now},

   image:{type:String, required:true},

   price:{type:Number, required:true}

})

const Schema = mongoose.model('Schema', One, 'ones');

module.exports = Schema;