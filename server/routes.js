/**
 * Simple API Server exposes tastks api.
 * No database required.
 * 
 */

// init server


var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var _ = require("underscore");

app.use(bodyParser.json());


/**
 * The Users in-memory datastore
 * 
 * @type {Array}
 */
var users = [{
        id: 1,
        username: 'a',
        password: 'a'
    }, {
        id: 2,
        username: 'b',
        password: 'b'
    }, {
        id: 3,
        username: 'c',
        password: 'c'
    }, {
        id: 4,
        username: 'd',
        password: 'd'
    }, {
        id: 5,
        username: 'e',
        password: 'e'
    }, {
        id: 6,
        username: 'f',
        password: 'f'
    }, ],
    lastUser = 6;


/**
 * Increase the seed for new users
 * 
 * @return {[type]} [description]
 */
function nextUserSeed() {
    lastUser += 1;
    return lastUser;
}



/**
 * Get all users
 */
app.get('/api/v1/user', function(req, res) {
    res.status(200).send(users);
});



/**
 * Get a single User
 */
app.get('/api/v1/user/:id', function(req, res) {

    var id = req.params.id;

    if (!id) {
        res.status(400).send('WRONG PARAMS');
    } else {

        var foundUser = _.findWhere(users, {
            id: parseInt(id, 10)
        });

        if (foundUser) {
            res.status(200).send(foundUser);
        } else {
            res.status(404).send('NOT FOUND');
        }

    }
});



/**
 * Delete a single User
 */
app.delete('/api/v1/user/:id', function(req, res) {

    var id = req.params.id;

    if (!id) {
        res.status(400).send('WRONG PARAMS');
    } else {

        var foundUser = _.findWhere(users, {
            id: parseInt(id, 10)
        });

        if (foundUser) {
            users = _.without(users, foundUser);
            res.status(200).send(foundUser);
        } else {
            res.status(404).send('NOT FOUND');
        }

    }
});




/**
 * Add a User
 */
app.post('/api/v1/user', function(req, res) {
    console.log('put with data', req.body);
    var user = req.body;
    user.id = nextUserSeed();
    users.push(user);
    res.status(200).send('OK');
});


/**
 * Update a User
 */
app.put('/api/v1/user/:id', function(req, res) {

    var user = req.body;
    var id = req.params.id;


    if (!id) {
        res.status(400).send('WRONG PARAMS');
    } else {

        var foundUser = _.findWhere(users, {
            id: parseInt(id, 10)
        });

        if (foundUser) {
            _.extend(foundUser, user);
            res.status(200).send(foundUser);
        } else {
            res.status(404).send('NOT FOUND');
        }

    }
});


module.exports = app;
