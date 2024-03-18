const RoomInspiration = require("../models/RoomInspiration")
const axios = require("axios")

const getRoomImages = async(req,res)=>{
    try{
        const images = await RoomInspiration.find();

        res.status(200).json({ message: 'images fetched successfully', images});
    }catch(error){
        console.log(error)
        res.status(500).json({ error: 'Some error occurred' });
    }
}

module.exports = getRoomImages
