<<<<<<< HEAD
const user = require('../Models/userModel');
const passport = require('../config/passport');
const jwt = require('jsonwebtoken');
=======
const knex = require('knex');
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
db.plugin(secure);
const body = require('body-parser');
>>>>>>> 839b1d01e863d25125bad01ad59132adcf6d11dd
const userContr={};



<<<<<<< HEAD
=======
const user=db.Model.extend({
  tableName: 'login',
  hasSecurePassword: true
})

>>>>>>> 839b1d01e863d25125bad01ad59132adcf6d11dd
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
