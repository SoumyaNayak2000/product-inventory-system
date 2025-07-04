const router = require('express').Router();
const controller = require('./product.controller');
const { createProductSchema } = require('./product.validation');
const validateRequest = require('../../middlewares/validateRequest');

router.post('/', validateRequest(createProductSchema), controller.addProduct);
router.get('/', controller.getProductList);
router.delete('/:id', controller.deleteProduct);

module.exports = router;
