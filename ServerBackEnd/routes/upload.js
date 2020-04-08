const {Router}= require('express');
const router=Router();
const {uploadFile}=require('../Controllers/uploadFile');


router.route('/')
  .post(uploadFile);


module.exports=router;
