const { removeAllListeners } = require("../models/Cart")
const Seller = require("../models/Seller")

const createSeller = async(req,res) =>{
    try{
        const data= req.body
        const userId = req.params.userId
        console.log(data, userId)
    
        const newSeller = new Seller({
            userId: userId,
            shop_name : data.shop_name
        })
    
       await newSeller.save() 
        console.log(newSeller)
        
        res.status(200).json({ message: 'account suuccessfully created', newSeller});
        }
        catch(error){
        console.log(error)
        res.status(500).json({error:"some error occured"})
        }
    
} 

const getseller = async(req,res) =>{
    try{
        const sellerId = req.params.sellerId
        const seller = await Seller.findById(sellerId).populate("userId")
        res.status(200).json({ message: 'account suuccessfully created', seller});

    }catch(error){
        console.log(error)
    }
}

const getAllSeller= async(req,res) => {
    const allSeller = await Seller.find({})
    res.send(allSeller)
}


module.exports = {createSeller, getseller, getAllSeller}