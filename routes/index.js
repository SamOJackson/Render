var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Jackson Family tree' });
});

router.get('Sam', (req, res, next) =>{
  res.render('Sam', { title: 'Me: Sam' });
});

router.get('Andy', (req, res, next) =>{
  res.render('Andy', { title: 'My dad: Andy' });
});

router.get('Sachi', (req, res, next) =>{
  res.render('Sachi', { title: 'My mom: Sachi' });
});

router.get('Noah', (req, res, next) =>{
  res.render('Noah', { title: 'My Brother: Noah' });
});

module.exports = router;