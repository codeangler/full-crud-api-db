// require dependencies
var express = require('express')
var bodyParser = require('body-parser')
var logger = require('morgan')
var mongoose = require('mongoose')
var apiRouter = require('./api_routes')
var port = 8080 //  9.1 
var app = express()

//  7.  initial connection to DB ,  a "connection string"
mongoose.connect('mongodb://localhost/donuts', // last portion is name of DB; second argument  callback function
  function (error){
    if(error){
      console.error(error)
    } else{
      console.log("Mongoose connected successfully")
    }
  }
) 

// 8.  connect and use middle ware \\
app.use(bodyParser())
app.use(logger('dev'))

// 10.   first RESTful argument, 
app.use('/api/v0', apiRouter) 


// 9 .set up listener

app.listen(port, function(error){
  if (error){
    console.log('Error starting server!', error)
  }
  else {
    console.log("Server is listening")
  }
})