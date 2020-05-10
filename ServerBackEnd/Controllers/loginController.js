
const keys = require('../keys');
const user= require('../Models/userModel')
const passport=require('../config/passport')
const jwt= require('jsonwebtoken');
const secure = require('bookshelf-secure-password');
const loginContr={};



loginContr.loginAuthToken=async(req,res)=>{
  if(!req.param('usuario') || !req.param('password')){
    return res.send('Sin datos');
  }

  await user.forge({usuario: req.param('usuario')}).fetch().then(result=>{
    if(!result){
      return res.send('Usuario no encontrado');
    }

    result.authenticate(req.param('password')).then(user => {
      const payload={id: user.id};
      const token=jwt.sign(payload,keys.secretOrKey);
      res.send(token);
    }).catch(err=>{
      return res.send({err: err});
    });
  }).catch(function (error) {
    return res.send('Usuario no encontrado')
  });
}

loginContr.protected=passport.authenticate('jwt',{session: false}),(req,res)=>{
  res.send('i\'m protected');
  console.log('Hola proteccion');
}


module.exports=loginContr;
