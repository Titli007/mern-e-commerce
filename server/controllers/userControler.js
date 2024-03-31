const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const createUser = async (req, res) => {
  try {
    const { name, email, pass } = req.body;

    if (!(name || email || pass)) {
      res.status(400).send("insufficient data sent");
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      res.status(500).send("User already exist with this email");
    }

    const encPass = await bcrypt.hash(pass, 10);

    const newUser = await User.create({
      name: name,
      email: email,
      pass: encPass
    });

    const token = jwt.sign(
      { user_id: newUser._id, email },
      'shhhh',
      {
        expiresIn: "2h"
      }
    );

    newUser.pass = undefined

    console.log('token was' , token)

    res.status(200).json({ success: true,token: token, user: newUser,  });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "some error occurred" });
  }
};

const loginUser = async (req, res) => {
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

    console.log(existingUser.pass)

    bcrypt.compare(pass , existingUser.pass)
    .then(result =>{
      if(result) {
        const token = jwt.sign(
          { user_id: existingUser._id, email },
          'shhhh',
          {
            expiresIn: "2h"
          }
        );
  
        res.status(200).json({ success: true, token, existingUser });
      }
      else {
        res.status(403).json({ message: 'Invalid credentials' });
      }
    })

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "some error occurred" });
  }
};

const getAllUser = async (req, res, next) => {
  try {
    const allUser = await User.find({});
    res.send(allUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "some error occurred" });
  }
};


const getSingleUser = async (req, res , next) => {
  try {
    const user = req.user
    res.send(user)
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "some error occurred" });
  }
}

module.exports = {
  createUser,
  loginUser,
  getAllUser,
  getSingleUser
};
