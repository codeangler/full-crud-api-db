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

      })
    }
    , 
// 25 ... what do we need to talk to DB
    create: function ( req, res){ 
      var newDonut = new Donut(req.body) // 25.1 created model from the form

      newDonut.save(function(err, donut){
        if(err){
          console.log('error : ' + error)
        } else {
          res.json(donut) // 25.3 returns the saved unique DB object with the #id
          console.log ( donut, "has been created and saved")
        }
      }) // 25.2  save the constructed new Donut
    }
  }

module.exports = donutController // 17  