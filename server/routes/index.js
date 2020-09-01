var express = require('express');
var cors = require('cors');
var router = express.Router();

/* GET home page. */
router.get('/', cors(), function(req, res, next) {
    console.log("pokemon")
    res.json({'nome': 'Pokemon'});
});

module.exports = router;