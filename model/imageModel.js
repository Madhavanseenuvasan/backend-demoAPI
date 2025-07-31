const mongoose=require('mongoose');

const imageSchema= new mongoose.Schema({
  image_URL:String,
  Name:String,
  Description:String,
  Price:Number
});

const imageModel= mongoose.model('Image',imageSchema);
module.exports=imageModel;
