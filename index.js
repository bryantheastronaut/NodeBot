'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();

app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.send('Hello world, im a chat bot')
});

//fb verification
app.get('/webhook/', function(req, res) {
  if (req.query['hub.verify_token'] === 'hope_this_thing_works') {
    res.send(req.query['hub.challenge']);
  }
  res.send('Error, wrong token');
});

app.listen(app.get('port'), function() {
  console.log('Bot running on port', app.get('port'));
});
