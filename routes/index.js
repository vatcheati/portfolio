var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'home' });
});

router.get('/movies', function(req, res, next) {
  res.render('movies', {title: 'movies'} );
});

module.exports = router;
