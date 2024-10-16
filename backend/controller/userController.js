const User  = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookie = require('cookie');

const userCtrl = {
  register : async(req,res) => {
    try{
    const {fullName ,email,password} = req.body;
    if(!fullName || !email || !password){
        return res.status(400).json({message:"Please provide all fields"}); //400 is bad request
    }
    if(password.length < 6){
        return res.status(400).json({message:"Password should be atleast 6 characters"});
    }
    const userExists = await User.findOne({email});
    if(userExists){
        return res.status(400).json({message:"Email already exists"});
    }
    const hashPassword = await bcrypt.hash(password,10);
    const profilePhoto = 'https://avatar.iran.liara.run/public'
    const user = await User.create({
        fullName,
        email,
        password:hashPassword,
        profilePhoto
    }); 
    
    return res.status(201).json({
        success:true,
        message:"User created successfully",
        user,
    });
    }catch(err){
        console.log(err);
    }
},
login : async(req , res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Please provide all fields" });
    }
    
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }
    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }
    
    const tokenData = {
      userId: user._id
    };
    
    const token = jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: '1d' });
    
    return res.status(200).cookie('token', token, {
      maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds
      httpOnly: true,
    }).json({
      success: true,
      message: "Login successful",
      user,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Server error" }).json({
      msg:'Logout successfully'
    })
  }
},

logout: async (req, res) => {
  try {
    return res
      .status(200)
      .clearCookie('token', { 
        httpOnly: true, // Ensure it matches how the cookie was set
        secure: process.env.NODE_ENV === 'production', // Ensure 'secure' flag for production
        sameSite: 'strict', // Ensure sameSite if you used it initially
       })
      .json({
        msg: 'Logout successfully'
      });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: 'Something went wrong' });
  }
}


}


module.exports = userCtrl;
 