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
}


module.exports=loginContr;
