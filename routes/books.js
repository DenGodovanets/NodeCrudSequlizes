var express = require('express');
var router = express.Router();
const bookController = require('../controllers').books;
const errorHandler = require('../controllers').errorHandler;
const validator = require('express-joi-validation')({});
const { idSchema, bookSchema } = require('./shema');

router.get('/', errorHandler(bookController.getAll));
router.post('/', validator.body(bookSchema), errorHandler(bookController.create));
router.put('/:id', [validator.body(bookSchema), validator.params(idSchema)], errorHandler(bookController.update));
router.get('/:id', validator.params(idSchema), errorHandler(bookController.getById));
router.delete('/:id',validator.params(idSchema), errorHandler(bookController.delete));

module.exports = router;
