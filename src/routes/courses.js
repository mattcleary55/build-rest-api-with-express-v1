'use strict';

//load express
var express = require('express');
//create router 
var router = express.Router();

// Returns the Course "_id" and "title" properties
router.get('/api/courses', function(req, res, next){
	//res.json('data/data.json', [{title:}, {_id:}]);
});

// Returns all Course properties and related documents for the provided course ID
router.get('/api/course/:id', function(req, res, next){

});

//Creates a course, sets the Location header, and returns no content
router.post('/api/courses', function(req, res, next){

});

//Updates a course and returns no content
router.put('/api/courses/:id', function(req, res, next){

});

module.exports = router;
