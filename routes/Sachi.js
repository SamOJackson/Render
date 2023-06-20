const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) =>{
    res.render("Sachi", { title: "Sachi Jackson"});

});

module.exports = router;

