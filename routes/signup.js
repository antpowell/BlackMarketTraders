var express = require('express');
var router = express.Router();

/* GET sign-up page. */
router.get('/', function (req, res, next) {
		res.render('sign-up');
});

module.exports = router;
