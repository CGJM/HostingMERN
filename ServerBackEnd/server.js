const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app=express();
const passport = require('passport');
const passportJWT = require('passport-jwt');
const keys = require('./keys');
const JWTStrategy=passportJWT.Strategy;
const ExtractJwt=passportJWT.ExtractJwt;
const knex = require('knex');
const body = require('body-parser');
const knexDb=knex({  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: 'Esnafer19#',
    database: 'prueba'
  }});
const bookshelf = require('bookshelf');
const secure = require('bookshelf-secure-password');
const db=bookshelf(knexDb);



const options={
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: keys.secretOrKey
};
const strategy=new JWTStrategy(options,(payload,next)=>{
    const user= user.forge({id: payload.id}).fetch().then(res=>{
      next(null,res);
    });
});



//settings
app.set('port',process.env.PORT||3001);

//middlewares
passport.use(strategy);
app.use(cors());
app.use(express.json());
app.use(passport.initialize());
app.use(body.urlencoded({extended:false}));
app.use(body.json());

//routes
//app.get('/user',require('./routes/user'));
app.use('/users',require('./routes/user'));
app.use('/login',require('./routesLogin/UserLogin'));


module.exports=app;
