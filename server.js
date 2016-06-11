var express = require('express');
var bodyParser = require('body-parser');

var Post = require('./models/post');

var app = express();
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.sendFile('layouts/posts.html', { root: __dirname });
});

app.get('/api/posts', function(req, res, next) {
  Post.find()
    .sort('-date')
    .exec(function(err, posts) {
      if (err) { return next(err); }
      res.status(200).json(posts);
    });
});

app.post('/api/posts', function(req, res, next) {
  var post = new Post({
    username: req.body.username,
    body:     req.body.body
  });

  post.save(function(err, post) {
    // check whether there is an error message and if so, call the next()
    // callback, which triggers a 500 in Express
    if (err) { return next(err); }

    res.status(201).json(post);
  });
});

app.listen(3000, function() {
  console.log('Server listening on', 3000);
});
