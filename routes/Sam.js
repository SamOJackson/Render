const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) =>{
    res.render("Sam", { title: "Sam Jackson"});
});


module.exports = router;

