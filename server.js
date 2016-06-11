var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.sendFile('layouts/posts.html', { root: __dirname });
});

require('./controllers/api/posts')(app);

app.listen(3000, function() {
  console.log('Server listening on', 3000);
});
