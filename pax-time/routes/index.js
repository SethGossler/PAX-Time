var express = require('express');
var router = express.Router();
var getRequest = require("request");

/* GET home page. */
router.get('/', function(req, res) {
  
	var query = "PAX 2014";
	var url = "http://api.showclix.com/Event/search?keyword="+query;

	getRequest({
		url: url,
		json: true
	}, function(err, resp, data){

	  res.render('index', { title: 'PAX Available', data: data });
		console.log(data);
	});


});

module.exports = router;
