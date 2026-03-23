const express = require('express');
const router = express.Router();
const Product= require('../models/product.model.js');
const {getProducts}= require('../controller/product.controller.js');
const {getProduct}= require('../controller/product.controller.js');
const {createProducts}= require('../controller/product.controller.js');
const {updateProduct}= require('../controller/product.controller.js');
const {deleteProduct}= require('../controller/product.controller.js')

router.get('/',getProducts);
router.get('/:id',getProduct);
router.post('/',createProducts);

//update product by id
router.put('/:id',updateProduct);

//delete product by id
router.delete('/:id',deleteProduct);

module.exports= router;