const User = require("../models/User")

const createUser = async(req, res) =>{
    try{
        const data= req.body
        console.log(data)
    
        newUser = new User({
          name:data.name,
          email:data.email,
          pass:data.password
        })
    
       await newUser.save() 
        console.log(newUser)
      
       res.status(200).json({ message: 'account suuccessfully created', newUser});
      }
      catch(error){
        console.log(error)
        res.status(500).json({error:"some error occured"})
      }
}


const loginUser =async(req, res) =>{
    try{
      const {email, pass}= req.body
      console.log(req.body)
  
      const existingUser = await User.findOne({
        email: email,
      })
  
      console.log(existingUser)
  
      // select * from tablename where email=""
  
      if(!existingUser){
        return res.status(404).json({message:"email doesn't exists"})
      }
      if(existingUser && existingUser.pass !== pass){
        return res.status(404).json({message:"password is incorrect"})
      }
      
  
      
  
      res.status(200).json({ message: 'you are suuccessfully logged in', existingUser });
    }
    catch(error){
      console.log(error)
      res.status(500).json({error:"some error occured"})
    }
  }
const getAllUser = async(req, res) => {
  const allUser = await User.find({})
  res.send(allUser)
}
  
  
  module.exports = {
    createUser, loginUser , getAllUser
  }


