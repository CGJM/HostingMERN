const express = require('express');
const cors = require('cors');
const app=express();
const passport = require('./config/passport');
const body = require('body-parser');

//settings
app.set('port',process.env.PORT||3001);

//middlewares
app.use(cors());
app.use(express.json());
app.use(passport.initialize());
app.use(body.urlencoded({extended:false}));
app.use(body.json());
app.use(body.json());

//routes
//app.get('/user',require('./routes/user'));
app.use('/users',require('./routes/user'));
app.use('/login',require('./routesLogin/UserLogin'));
app.get('/getUser',passport.authenticate('jwt',{session:false}),(req,res) =>{
  res.send(req.user);
});

module.exports=app;
