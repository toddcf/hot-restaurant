var express = require('express');
var path = require('path');
const router = express.Router();


router.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, '../../index.html'));
});


router.get('/tables', function (req, res) {
	res.sendFile(path.join(__dirname, '../../tables.html'));
});

router.get('/reserve', function (req, res) {
	res.sendFile(path.join(__dirname, '../../reserve.html'));
});

module.exports = router;
