/**
	* Created by powel on 12/29/2016.
	*/
var express = require('express');
var router = express.Router();

/* GET sign-up page. */
router.get('/', function (req, res, next) {
		res.render('about');
});

module.exports = router;
