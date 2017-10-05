/*
// Created: Oct 5, 2017 9:15 PM
// Author: Jeanine Smith
          Jonathan Gryn
          Maike Scherer
          Tatianna Watwood
          Wesley Klotzly
// Revisions: Jon (10/4/17) - Started controller.js
*/

// Pull in required dependencies
var express = require('express');
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require('../models/todo.js');

// Create the routes and associated logic
router.get('/', function(req, res) {
    todo.selectAll(function(data) {
        var hbsObject = {
            todos: data
        };

        // console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

router.post('/todos', function(req, res) {
    todo.insertOne([
        'todo_name'
    ], [
        req.body.todo_name
    ], function(data) {
        res.redirect('/');
    });
});

router.put('/todos/:id', function(req, res) {
    var condition = 'id = ' + req.params.id;

  todo.updateOne({
        finished: true
    }, condition, function(data) {
        res.redirect('/');
    });
});

// Export routes for server.js to use.
module.exports = router;
