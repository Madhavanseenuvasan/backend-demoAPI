const imageModel=require('../model/imageModel');

exports.getImages=async(req,res)=>{
  const images=await imageModel.find({});
  res.json({message:'Image Works',images});
};

exports.getSingleImage=async(req,res)=>{
    const images=await imageModel.findById(req.params.id);
    res.json({message:'Single Image Works',images});
  };

exports.createImage=async(req,res)=>{
  const {image_URL,Name,Description,Price}=req.body;
  const images=await imageModel.create({
    image_URL,
    Name,
    Description,
    Price
  });
  res.json({message:'Image Posted',images});
};

exports.updateImage=async(req,res)=>{
  const images=await imageModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
  res.json({message:'Image Updated',images})
};

exports.deleteImage=async(req,res)=>{
  const images=await imageModel.findByIdAndDelete(req.params.id);
  res.json({message:'Image deleted',images})
};