const mongoose = require("mongoose")
const { Schema } = mongoose

const productSchema =  new Schema({
    name:{type:String, required: true},
    desc: String,
    imageUrl: String ,
    category: String,
    shop_name: {
        type: String,
        ref: "Seller",
        required : true
    },
    price: {type:Number, required: true},
})

const Product = mongoose.model("Product", productSchema)

module.exports = Product