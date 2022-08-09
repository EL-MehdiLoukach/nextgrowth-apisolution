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
const {loginRequired, register, login} = require('../controllers/user')

const routes = (app) => {
    // Get All Products
    app.route('/product/').get(loginRequired, GET_PRODUCTS)
    // Get One Single Product 
    app.route('/product/:id').get(loginRequired, GET_ONE_PRODUCT)
    // Add new Product
    app.route('/product/').post(loginRequired, POST_PRODUCT)
    // Delete Product
    app.route('/product/:id').delete(loginRequired, DELETE_PRODUCT)
    // Update Product
    app.route('/product/:id').patch(loginRequired,PATCH_PRODUCT)
    // GET ALL PRODUCT'S VARIANTS
    app.route('/product/:id/variants/').get(loginRequired, GET_PRODUCT_VARIANTS)
    // GET ONE PRODUCT'S VARIANT
    app.route('/product/:id/variants/:vid').get(loginRequired,GET_ONE_PRODUCT_VARIANT)
    // User auth
    app.route('/auth/register')
    .post(register);
    // login route
    app.route('/login')
        .post(login);
}
module.exports = {routes};