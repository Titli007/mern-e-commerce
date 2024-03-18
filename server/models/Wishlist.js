const mongoose = require("mongoose")
const { Schema }= mongoose

const wishlistSchema = new Schema({
    userId : {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique : true
    },
    products: [{
        product_id : {
            type: Schema.Types.ObjectId,
            ref: "Product",
            required: true,
            unique : true
        }
    }]
    
})


const WishList = mongoose.model("WishList", wishlistSchema)

module.exports = WishList