<<<<<<< HEAD
const express = require('express');
const cors = require('cors');
const app=express();
const passport = require('./config/passport');
const body = require('body-parser');
=======
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


>>>>>>> 839b1d01e863d25125bad01ad59132adcf6d11dd

//settings
app.set('port',process.env.PORT||3001);

//middlewares
<<<<<<< HEAD
=======
passport.use(strategy);
>>>>>>> 839b1d01e863d25125bad01ad59132adcf6d11dd
app.use(cors());
app.use(express.json());
app.use(passport.initialize());
app.use(body.urlencoded({extended:false}));
app.use(body.json());
<<<<<<< HEAD
app.use(body.json());
=======
>>>>>>> 839b1d01e863d25125bad01ad59132adcf6d11dd

//routes
//app.get('/user',require('./routes/user'));
app.use('/users',require('./routes/user'));
app.use('/login',require('./routesLogin/UserLogin'));
<<<<<<< HEAD
app.get('/getUser',passport.authenticate('jwt',{session:false}),(req,res) =>{
  res.send(req.user);
});
=======

>>>>>>> 839b1d01e863d25125bad01ad59132adcf6d11dd

module.exports=app;
