// 15 first thing needed to be controller will be model
var Donut = require('./donut_model')

var donutController = {
  all: function(req, res){  // 16 what does this all method take as arguments?  req, res
    Donut.find({}, function (error, donuts) { // 21  pass empty object, callback function
      if(error){
        console.error('Error finding donuts: ', error)
      } else{
        res.json(donuts)
      }
    } ) 
  }
}
module.exports = donutController // 17  