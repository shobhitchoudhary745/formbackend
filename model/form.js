const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
  }, 
  lastName: {
    type: String,
    trim: true,
  }, 
  email:{
    type:String,
    unique:true,
    trim:true
  },
  country:{
    type:String,
    trim:true
  },
  state:{
    type:String,
    trim:true
  },
  city:{
    type:String,
    trim:true
  },
  gender:{
    type:String,
    trim:true
  },
  dob:{
    type:String,
    trim:true
  },
  age:{
    type:String,
  }
});

const Form = mongoose.model("UserSchema", userSchema);

module.exports = Form;
