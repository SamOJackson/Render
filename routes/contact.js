const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) =>{
    res.render("contact", { title: "Contact Me"});

});

router.get('action', (req, res, next) =>{
    res.render('action', { title: 'Messages' });
  });

module.exports = router;

