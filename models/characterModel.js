// models/characterModel.js

const mongoose = require('mongoose')

const characterSchema = new mongoose.Schema(
  {
    name:{
      type:String,
      required:true,
      trim:true
    },
    level:{
      type:Number,
      required:true,
    },
    idOnline:{
      type:Boolean,
      required:false,
    }
  },

  {
    timestamps:true
  }
)

const Character = mongoose.model('Character', characterSchema)

module.exports = Character;
