const {Router}= require('express');
const router=Router();
const {getUsers,createUser}=require('../Controllers/userController');


router.route('/')
  .get(getUsers)
  .post(createUser);


module.exports=router;
