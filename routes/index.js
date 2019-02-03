var express = require('express');
var router = express.Router();

router.use('/books', require('./books'));
router.use('/authors', require('./authors'));

module.exports = router;
