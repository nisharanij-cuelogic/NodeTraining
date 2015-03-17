var express = require('express');
var router = express.Router();
var url = require('url') ;
/* GET home page. */
router.get('/', function(req, res, next) {
	console.log(url.parse(req.url).pathname);
  res.data('index Express');
});

module.exports = router;
