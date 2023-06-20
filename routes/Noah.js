const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) =>{
    res.render("Noah", { title: "Noah Jackson"});

});


module.exports = router;

