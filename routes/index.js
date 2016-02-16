var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'portfolio' });
});

router.get('/about', function(req, res, next) {
  res.render('about', {title: 'about'} );
});

router.get('/skills', function(req, res, next) {
  res.render('skills', {title: 'skills'} );
});

router.get('/work', function(req, res, next) {
  res.render('work', {title: 'work'} );
});

router.get('/contact', function(req, res, next) {
  res.render('contact', {title: 'contact'} );
});

module.exports = router;
