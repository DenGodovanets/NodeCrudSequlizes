var express = require('express');
var router = express.Router();
const authorContoller = require('../controllers').authors;
const errorHandler = require('../controllers').errorHandler;
const validator = require('express-joi-validation')({});
const { idSchema, authorSchema } = require('./shema');

router.get('/', errorHandler(authorContoller.getAll));
router.post('/', validator.body(authorSchema), errorHandler(authorContoller.create));
router.put('/:id', [validator.body(authorSchema), validator.params(idSchema)], errorHandler(authorContoller.update));
router.get('/:id', validator.params(idSchema), errorHandler(authorContoller.getById));
router.delete('/:id',validator.params(idSchema), errorHandler(authorContoller.delete));

module.exports = router;
