//  new fill  set 11
var apiRouter = require('express').Router()// only bringing in the router object

// set 12  
var donutController = require('./dController')

// 13 chaining all the verbs
  // 13.1  all the end points, as the passed
  // http// localhost/api/v0/donutes
apiRouter.route('donuts')
  .get(donutController.all) // takes route handler

// 14 must export it
module.exports = apiRouter;