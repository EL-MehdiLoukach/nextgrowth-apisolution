const ObjectId = require('mongoose').Types.ObjectId;    
const { Product, Variant } = require('../models/product');
const { handleCreateOne, handleUpdateOne, handleReadAll, handleReadOne, handleDeleteOne } = require("../middlewares/handlers");

const { switchStatusResponse } = require("../middlewares/statusResponses");

const GET_PRODUCTS = async (req,res) => {
    switchStatusResponse(await handleReadAll(), res);
}
const POST_PRODUCT = async (req,res) => {
    switchStatusResponse(await handleCreateOne(req.body), res);
}
const DELETE_PRODUCT = async (req,res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record With Given ID : ${req.params.id}`);
    switchStatusResponse(await handleDeleteOne(req.params.id), res);
}
const PATCH_PRODUCT = async (req,res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record With Given ID : ${req.params.id}`);
    switchStatusResponse(await handleUpdateOne(req.body, req.params.id), res);
}
const GET_PRODUCT_VARIANTS = async (req,res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record With Given ID : ${req.params.id}`);

    Product.findById(req.params.id, (err, data) => {
        if(!err) {
            
            res.send(data.variants);
        } else {
           console.log(err);
        }
    });
}
const GET_ONE_PRODUCT_VARIANT = async (req,res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record With Given ID : ${req.params.id}`);

    Product.findById({_id : req.params.id, "variants.id" : req.params.vid}, (err, data) => {
        if(!err) {
            
            res.send(data.variants);
        } else {
           console.log(err);
        }
    });
}
const GET_ONE_PRODUCT = async (req,res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record With Given ID : ${req.params.id}`);
    switchStatusResponse(await handleReadOne(req.params.id), res);
}
module.exports = {
    GET_PRODUCTS,
    GET_ONE_PRODUCT,
    DELETE_PRODUCT,
    POST_PRODUCT,
    PATCH_PRODUCT,
    GET_PRODUCT_VARIANTS,
    GET_ONE_PRODUCT_VARIANT
}