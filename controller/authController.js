const authModel=require('../model/authModel');
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken');

exports.register=async (req,res)=>{
  const {email,password}=req.body;
  
  try {
    const existinguser=await authModel.findOne({email})
    if(existinguser)return res.status(400).json({message:'User already exists'});

    const salt = await bcrypt.genSalt(10);
    const hashedPassword= await bcrypt.hash(password,salt);
  
    const newUser=new authModel({email,password:hashedPassword})
    await newUser.save();
  
    const payload={user:{id: newUser.id}};
    const token=jwt.sign(payload,process.env.JWT_KEY);

    res.json({message:'Registered successfully',newUser,token});
    
  } catch (error) {
    res.json({error})
  }
};

exports.login=async (req,res)=>{
  const {email,password}=req.body;
  
  try {
    const user=await authModel.findOne({email})
    if(!user) return res.status(400).json({message:'Invalid Email Id'});

    const isMatch=await bcrypt.compare(password,user.password);
    if(!isMatch) return res.status(400).json({message:'Invalid Password'});
  
    const payload={user:{id: user.id}};
    const token=await jwt.sign(payload,process.env.JWT_KEY)

    res.json({message:'Login successful',token})
    
  } catch (error) {
    res.json({error})
  }
};