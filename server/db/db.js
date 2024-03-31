// pass: 1234
// mongodb+srv://rayananyaindia:1234@cluster0.u4egxsi.mongodb.net/

const mongoose = require("mongoose")

const connectDB = async()=>{
    try{
        const mongodb_URI = process.env.MONGODB_URI
        const connection = await mongoose.connect(mongodb_URI)
        console.log("mongodb connected")
    }catch(error){
        console.log(error)
    }
}

module.exports = connectDB