const { removeAllListeners } = require("../models/Cart")
const Seller = require("../models/Seller")
const User = require("../models/User")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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

const loginSeller = async (req, res) => {

  try {
    const { email, pass } = req.body;

    console.log(email, pass)

    if (!(email || pass)) {
      res.status(400).send("insufficient data");
    }

    const existingUser = await User.findOne({
      email: email,
    }); 
    

    if (!existingUser) {
      return res.status(404).json({ message: "email doesn't exist" });
    }

    

    bcrypt.compare(pass , existingUser.pass)
    .then(async(result) =>{
      if(result) {
        console.log("result", result)

        const seller = await Seller.findOne({userId : existingUser._id})

        console.log("seller", seller)

        if(!seller){
          res.status(401).json({message: "no seller found"})
        }

        // res.status(200).json({message: "seller found", seller})

        console.log("existinguser",existingUser)

        const token = jwt.sign(
          { seller_id: seller._id, userId : existingUser._id},
          'shhhh',
          {
            expiresIn: "2h"
          }
        );
        console.log("token",token, "seller",seller)
        res.status(200).json({ success: true, token, seller });
      }
      else {
        res.status(403).json({ message: 'Invalid credentials' });
      }
    })
  
      
  
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Some error occurred" });
    }
  };

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

const singleSeller = async (req, res , next) => {
  try {
    console.log("enter in ")
    const userId = req.user.userId

    console.log("user id from auth", userId)
    const seller = await Seller.findOne({userId : userId})
    console.log("seller", seller)
    if(!seller){
      res.status(401).json({message : "you are not seller", seller})
    }


    res.status(200).json({message: "successfull" , seller})
    console.log("seller2", seller)
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "some error occurred" });
  }
}



module.exports = {createSeller, getseller, loginSeller, getAllSeller, singleSeller}