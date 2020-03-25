const user = require('../Models/userModel');
const passport = require('../config/passport');
const jwt = require('jsonwebtoken');
const userContr={};



//Agregar Usuario
userContr.createUser=(req,res)=>{
  if(!req.param('nombre') || !req.param('apellido') || !req.param('usuario') || !req.param('password')){
    return res.send('Sin datos');
  }
  const usuar=new user({
    nombre: req.param('nombre'),
    apellido: req.param('apellido'),
    usuario: req.param('usuario'),
    password: req.param('password')
  });
  usuar.save().then(()=>{res.send('Ok, agregado');})
};


userContr.getUsers=(req,res)=>{
  res.send('Hello');
}
module.exports=userContr;
