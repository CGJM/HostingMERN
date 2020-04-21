const user = require('../Models/userModel');
const db = require('../database/db');
const passport = require('../config/passport');
const jwt = require('jsonwebtoken');
const fse = require('fs-extra')
const userContr = {};


userContr.createUser = (req, res) => {
  console.log('Entrando' + req.param('nombre'));
  if (!req.param('nombre') || !req.param('apellido') || !req.param('correo') || !req.param('fechaNac') || !req.param('usuario') || !req.param('password') || !req.param('db')) {
    return res.send('Sin datos');
  }
  const usuar = new user({
    nombre: req.param('nombre'),
    apellido: req.param('apellido'),
    correo: req.param('correo'),
    fechaNac: req.param('fechaNac'),
    usuario: req.param('usuario'),
    password: req.param('password')
  });
  
  const dir = '/var/pruebas/' + req.param('usuario')
  fse.ensureDir(dir, err => {
    console.log('El directorio no se pudo crear ', err)
  })
  usuar.save().then(() => {res.send('Ok, agregado');})
};


userContr.getUsers = (req, res) => {
  res.send('Hello soy get');
}
module.exports = userContr;
