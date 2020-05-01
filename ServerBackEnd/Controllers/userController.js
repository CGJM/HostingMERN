const user = require('../Models/userModel');
const db = require('../database/db');
const fse = require('fs-extra')
const userContr = {};


userContr.createUser = (req, res) => {
    if (!req.param('nombre') || !req.param('apellido') || !req.param('correo') || !req.param('fechaNac') || !req.param('usuario') || !req.param('password') || !req.param('db')) {
        return res.send('Sin datos');
    }
    const usuar = new user({
        nombre: req.param('nombre'),
        apellido: req.param('apellido'),
        correo: req.param('correo'),
        fechaNac: req.param('fechaNac'),
        usuario: req.param('usuario'),
        password: req.param('password'),
        database:req.param('db')
    });
    var sql1 = "Create database " + req.param('db');
    var sql2 = "CREATE USER  '" + req.param('usuario') + "'@'localhost' IDENTIFIED BY '" + req.param('password') + "';"
    var sql3 = "GRANT ALL PRIVILEGES ON " + req.param('db') + ".* TO '" + req.param('usuario') + "'@'localhost';"
    var sql4 = "FLUSH PRIVILEGES;";
    db.query(sql1, function (err, result) {
        if (err) throw err;
    })
    db.query(sql2, function (err, result) {
        if (err) throw err;
    })
    db.query(sql3, function (err, result) {
        if (err) throw err;
    })
    db.query(sql4, function (err, result) {
        if (err) throw err;
    })
    const dir = '/var/pruebas/' + req.param('usuario')
    fse.ensureDir(dir, err => {
        console.log('El directorio no se pudo crear ', err)
    })
    usuar.save().then(() => {
        res.send('Ok, agregado, liasto');
    })
};


userContr.getUsers = (req, res) => {
    sql="select * from HostingUPT.User where usuario='"+req.param("id")+"'";
    db.query(sql, function(err, row, fields) {
        if(err) {
            res.status(500).send({ error: 'Something failed!' })
            return false;
        }
        let info=row[0]
        return res.json(info)
    })


}
userContr.getInfoDb=(req,res)=>{
    sql2="select*from mysql.db where Db='"+req.param("id")+"'"
    db.query(sql2, function(err, row, fields) {
        if(err) {
            res.status(500).send({ error: 'Something failed!' })
            return false;
        }
        let info2=row[0]
        return res.json(info2)
    })
}
userContr.modifyUser=(req,res)=>{
    console.log("Entre"+req.param("nombre"))
    sql2="update HostingUPT.User set Nombre='"+req.param("nombre")+"', Apellido='"+req.param("apellido")+
        "',Correo='"+req.param("correo")+"', FechaNac='"+req.param("fechaNac")+"' where usuario='"+req.param("usuario")+"';"
    db.query(sql2, function(err, row, fields) {
        if(err) {
            res.status(500).send({ error: 'Something failed!' })
            console.log(err)
        }
        return res.json({status:"Modified"});
    })

}

module.exports = userContr;
