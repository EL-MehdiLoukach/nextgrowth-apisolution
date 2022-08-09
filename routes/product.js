const express = require('express');
const router = express.Router();
const {
    GET_PRODUCTS,
    GET_ONE_PRODUCT,
    DELETE_PRODUCT,
    POST_PRODUCT,
    PATCH_PRODUCT,
    GET_PRODUCT_VARIANTS,
    GET_ONE_PRODUCT_VARIANT
} = require('../controllers/product')

// Get All Products
router.get('/', (req, res) => {
    GET_PRODUCTS(req,res)
});

// Get One Single Product 
router.get('/:id', (req, res) => {
    GET_ONE_PRODUCT(req,res)
});

// Delete Product
router.delete('/:id', (req, res) => {
    DELETE_PRODUCT(req,res)
});

// Add new Product
router.post('/', (req, res) => {
    POST_PRODUCT(req,res)
});

// Update Product
router.patch('/:id', (req, res) => {
    PATCH_PRODUCT(req,res)
});

// GET ALL PRODUCT'S VARIANTS
router.get('/:id/variants', (req, res) => {
    GET_PRODUCT_VARIANTS(req,res)
});
// GET ONE PRODUCT'S VARIANT
router.get('/:id/variants/:vid', (req, res) => {
    GET_ONE_PRODUCT_VARIANT(req,res)
});
module.exports = router;