var express = require('express');
var router = express.Router();
var fs = require('fs');
/* GET home page. */
router.get('/', function (req, res, next) {
    var page = fs.readFileSync('./views/hello.html');
    res.send(page.toString());
});

module.exports = router;