const express=require('express');
const dotenv=require('dotenv');
const path=require('path')
const connectDB=require('./config/connectDB')
const authMiddleware=require('./middleWare/authMiddleware')

dotenv.config({path: path.join(__dirname,'config','config.env')});

connectDB();
const image=express();
image.use(express.json())

image.use('/image',authMiddleware,require('./routes/imageRoutes'));
image.use('/auth',require('./routes/authRoutes'));


image.listen(process.env.PORT,()=>{
  console.log(`Server is running on the port ${process.env.PORT}`);
})

image.get('/',(req,res)=>{
  res.send("Hello!")
})