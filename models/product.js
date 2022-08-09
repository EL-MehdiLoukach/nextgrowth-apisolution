const mongoose =  require('mongoose');
const { Schema } = mongoose;

// Variants Schema
const VariantSchema = new Schema({
    sku : {
        type:String,
        required:true
    },
    specification:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
})
// Product Schema
const ProductSchema = new Schema({
    reference: {
        type: String,
        required:true
    }, 
    name: {
        type:String,
        required:true
    },
    description: {
        type:String,
        required:true
    },
    image : {
        type:String,
        required:true
    },
    variants : [VariantSchema]
});

const Product = mongoose.model('Products', ProductSchema);
const Variant = mongoose.model('Variants', VariantSchema);
module.exports = {Product, Variant}