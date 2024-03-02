const mongoose = require("mongoose")
const { Schema }= mongoose

const sellerSchema = new Schema({
    userId : {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    shop_name: String,
})

const Seller = mongoose.model("Seller", sellerSchema)
module.exports = Seller