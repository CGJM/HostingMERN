const {Router}= require('express');
const router=Router();
const {protected,loginAuthToken}=require('../Controllers/loginController');


router.route('/protected')
  .get(protected)

router.route('/token')
  .post(loginAuthToken)

module.exports=router;
