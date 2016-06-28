// 19  must inject mongoose
var mongoose = require('mongoose')

// 20
var donutSchema = mongoose.Schema({
  name: String,
  hole: Boolean,
  flavor: String,
  filling: String,
  toppings: [ String ],
  price: Number,
  expiration: Date,
  calories: Number

})

var Donut = mongoose.model('donut', donutSchema )  // 20.1  argument will be pluralized and passed as colleciton

module.exports = Donut