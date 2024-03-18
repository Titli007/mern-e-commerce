const mongoose = require("mongoose")
const { Schema } = mongoose

const imagesSchema =  new Schema({
    imageUrl: String
})

const RoomInspiration = mongoose.model("RoomInspiration", imagesSchema)

module.exports = RoomInspiration