const express = require('express');
const app= express();
const body = require('body-parser');
const cors = require('cors');
const passport = require('./config/passport');


//middlewares
app.use(passport.initialize());
app.use(body.urlencoded({extended:false}));
app.use(body.json());
app.use(cors());

//settings
app.set('port',process.env.PORT||3001);
//routes
app.use('/users',require('./routes/user'));
app.use('/login',require('./routesLogin/UserLogin'));
app.use('/uploadFile',require('./routes/upload'));
app.use('/project',require('./routes/project'));
app.get('/getUser',passport.authenticate('jwt',{session:false}),(req,res) =>{
  res.send(req.user);
});
module.exports=app;
