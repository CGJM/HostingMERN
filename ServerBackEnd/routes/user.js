const {Router}= require('express');
const router=Router();
const db = require('../database/db');
const rimraf=require('rimraf')
const {getUsers,createUser,getInfoDb,modifyUser}=require('../Controllers/userController');


router.route('/')
  .post(createUser)
    .put(modifyUser)
router.route('/get/:id')
    .get(getUsers)
router.route("/db/:id")
    .get(getInfoDb)
router.delete('/delete/', function(req, res, next) {
    const id = req.param('id');
    const datab=   req.param('db');
    rimraf.sync('/var/pruebas/'+id)
    const sql= `DELETE FROM HostingUPT.User WHERE usuario='${id}'`
    const sql2= `DROP USER '${id}'@'localhost'`
    const sql3= `Drop database ${datab}`
    const sql4='FLUSH PRIVILEGES;'
    db.query(sql, function (err, result) {
        if (err) throw err;
    })
    db.query(sql2, function (err, result) {
        if (err) throw err;
    })
    db.query(sql4,function (err,result) {
        if (err) throw err;
    })
    db.query(sql3,function (err,result) {
        if (err) throw err;
    })
    res.json({status:"Okey"})
})

module.exports=router;
