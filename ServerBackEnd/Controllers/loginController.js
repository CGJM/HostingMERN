<<<<<<< HEAD
const keys = require('../keys');
const user= require('../Models/userModel')
const passport=require('../config/passport')
const jwt= require('jsonwebtoken');
const secure = require('bookshelf-secure-password');
const loginContr={};

loginContr.loginAuthToken=(req,res)=>{
  if(!req.param('usuario') || !req.param('password')){
    return res.send('Sin datos');
  }
  user.forge({usuario: req.param('usuario')}).fetch().then(result=>{
=======
const passport = require('passport');
const passportJWT = require('passport-jwt');
const keys = require('../keys');
const JWTStrategy=passportJWT.Strategy;
const ExtractJwt=passportJWT.ExtractJwt;
const knex = require('knex');
const knexDb=knex({  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: 'Esnafer19#',
    database: 'prueba'
  }});
const bookshelf = require('bookshelf');
const db=bookshelf(knexDb);
const jwt= require('jsonwebtoken');
const secure = require('bookshelf-secure-password');
const loginContr={};
db.plugin(secure);

const user=db.Model.extend({
  tableName: 'login',
  hasSecurePassword: true
});
const options={
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: keys.secretOrKey
};
const strategy=new JWTStrategy(options,(payload,next)=>{
    const user= user.forge({id: payload.id}).fetch().then(res=>{
      next(null,res);
    });
});

loginContr.loginAuthToken=async(req,res)=>{
  if(!req.param('usuario') || !req.param('password')){
    return res.send('Sin datos');
  }
  await user.forge({usuario: req.param('usuario')}).fetch().then(result=>{
>>>>>>> 839b1d01e863d25125bad01ad59132adcf6d11dd
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
  });
}

loginContr.protected=passport.authenticate('jwt',{session: false}),(req,res)=>{
  res.send('i\'m protected');
<<<<<<< HEAD
  console.log('Hola proteccion');
=======
>>>>>>> 839b1d01e863d25125bad01ad59132adcf6d11dd
}


module.exports=loginContr;
