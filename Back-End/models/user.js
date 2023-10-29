const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstname: String,
  email: String,
  password: String,
  confirm: String,
  phone: Number,
  question: String,
  country: String,
  dob: String,
  city:String,
  Zipcode: String,
  address: String,
  state:String,
  country:String
});

module.exports = mongoose.model('User', userSchema);
