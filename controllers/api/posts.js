var Post = require('../../models/post');
var router = require('express').Router();

router.get('/', function(req, res, next) {
  Post.find()
  .sort('-date')
  .exec(function(err, posts) {
    if (err) { return next(err); }
    res.status(200).json(posts);
  });
});

router.post('/', function(req, res, next) {
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

module.exports = router;
