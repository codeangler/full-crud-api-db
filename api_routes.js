//  new fill  set 11
var apiRouter = require('express').Router()// only bringing in the router object

// set 12  
var donutController = require('./dController')

// 13 chaining all the verbs
  // 13.1  all the end points, as the passed
  // http// localhost/api/v0/donutes
apiRouter.route('/donuts')
  .get(donutController.all) // takes route handler ,, retrieving
  .post(donutController.create) // http protocol POST  #23,  creating single one

// #24  second half of full CRUD for a single MONGODB collection / document
apiRouter.route('/donuts/:id')
  .get(donutController.single) // single donuate retrieve
  .put(donutController.update) //  single donute update 
  .delete(donutController.destroy) // ()

// 14 must export it
module.exports = apiRouter;