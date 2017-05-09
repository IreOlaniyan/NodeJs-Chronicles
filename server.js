// BASE SETUP

// call the packages needed
var express = require('express');           //call express
var app = express();                        //define the app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this allows us to get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 1020         // sets the port

// ROUTES FOR THE API

var router = express.Router();            // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:1020/api)
router.get('/', function (request, response) {
    response.json({message: 'Welcome to our api'});
});
// more routes for the API can be added here

// REGISTER OUR ROUTES
// all routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
app.listen(port, function(){
    console.log('Magic happens on port ' + port);
});