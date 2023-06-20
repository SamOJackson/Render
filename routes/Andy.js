const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) =>{
    res.render("Andy", { title: "Andy Jackson"});

});

module.exports = router;

