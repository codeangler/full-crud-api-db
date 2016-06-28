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
          console.log('error : ' + err)
        } else {
          res.json(donut) // 25.3 returns the saved unique DB object with the #id
          console.log ( donut, "has been created and saved")
        }
      }) // 25.2  save the constructed new Donut
    },
    // 27  p arams
    single: function( req, res ){
      var id = req.params.id

      Donut.findById(id, function(err, donut){
        if(err){
          console.log('error : ' + err)
        } else {
          res.json(donut) //
        }
      }) //  findbyid returns single object instead of array
    },

    //  28 update function  POSTMAN test  put  
    update: function(req, res){
      var id = req.params.id
      Donut.findByIdAndUpdate(id, req.body, {new: true}, function(error, upDonut){
        if(error){
          console.log('error : ' + error)
        } else {
          res.json(upDonut) 
        }
      })
    },

    //  detroy
    destroy: function (req, res){
      var id = req.params.id;

      Donut.findByIdAndRemove(id, req.body, function(error){
        if(error){
          console.error("Your remove call failed : ", error)
        } else {
          res.json({
            success: true,
            message: "Deleted donute by id: " + id
          })
        }
      })
    }
  }

module.exports = donutController // 17  