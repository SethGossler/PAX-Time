var express = require('express');
var router = express.Router();
var getRequest = require("request");

var MongoClient = require('mongodb').MongoClient;

/* GET home page. */
router.get('/', function(req, res) {
  
	MongoClient.connect('mongodb://localhost/test', function(err, db) {
	    if(err) throw err;
   		var paxTime = db.collection("paxtime");

	    paxTime.findOne({_id:"0"}, function(e, datadb){
	    	data = datadb.data;
	    	console.log("-- Request! --");
				res.render('index', { title: 'PAX Available', data: data });
      });
	});

});

module.exports = router;
