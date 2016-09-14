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
  if (req.query['hub.verify_token'] === 'EAAHe6U1pTJUBAM9D50ZA1HMZCcAj9Mf7xr8oiM99Gag3vdZBnEFZB2rPbX0mjjjaDY2ZCjuSaqZCIXbenbZAhF8L4HEif3ZAinYCXCBZCCWwQD3ZAJM52i5IFxNQk04qZCM44udoV0FZC8x1P5NqZAR5v0HYeZAOZANYqOV2swYVrrr6JdujAZDZD') {
    res.send(req.query['hub.challenge']);
  }
  res.send('Error, wrong token');
});

app.listen(app.get('port'), function() {
  console.log('Bot running on port', app.get('port'));
});
