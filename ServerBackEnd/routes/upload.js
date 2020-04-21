const {Router}= require('express');
const router=Router();
const {uploadFile,prueba}=require('../Controllers/uploadFile');


router.route('/')
  .post(uploadFile)
    .get(prueba)  ;



module.exports=router;
