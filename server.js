var request = require('request');
var bodyParser = require('body-parser');
var express  = require('express');
var app      = express();
var port  	 = process.env.PORT || 8080;
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.get('*', function(req, res) {
  res.sendfile('./public/index.html');
});

app.post('/search', function(req, res) {

  var options = {
    url: 'http://xendit-user-service-staging.uppju9xwxz.us-west-2.elasticbeanstalk.com/users/' + req.body.user_id,
    method: 'GET',
    headers: {
      'Content-Type' : 'application/json',
      'X-API-KEY' : 'jvvvWNr22Gh8zdtJZE9aVx3H'
    }
  }


  request(options, function (error, response, body) {
    console.log(body)
    res.json(body)
  })
});

app.listen(port);

console.log("Open localhost:" + port);
