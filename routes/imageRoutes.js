const express=require('express');
const { getImages, createImage, updateImage, deleteImage, getSingleImage } = require('../controller/imageController');
const router=express.Router();

router.route('/api/').get(getImages).post(createImage);
router.route('/api/:id').get(getSingleImage).put(updateImage).delete(deleteImage);

module.exports=router;