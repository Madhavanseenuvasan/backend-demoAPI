const jwt=require('jsonwebtoken');

const authMiddleware=(req,res,next)=>{
  const authHeader=req.header('Authorization');
  const token=authHeader && authHeader.split(' ')[1]
  if(!token) return res.json({message:'No Token, No Authentication'})
  try {
    const decoded=jwt.verify(token,process.env.JWT_KEY);
    req.user=decoded;
    next();
  } catch (error) {
    res.json(error);
  }
}

module.exports=authMiddleware;