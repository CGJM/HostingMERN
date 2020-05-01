const multer = require('multer');
var fs = require('fs');
const uploadContr = {};


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        let type = req.path;
        console.log('Ruta: ', type)
        cb(null, '/var/pruebas/'+type);
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

var upload = multer({storage: storage}).single('noren')

uploadContr.uploadFile = upload, (req, res, next) => {
    console.log('La ruta es: ', req.path)
    const file = req.file
    if (!file) {
        const error = new Error('Please upload a file')
        error.httpStatusCode = 400
        return next(error)
    }
    return res.send({status: 'ok'})
};
uploadContr.prueba = (req, res) => {
    res.json({status: ''})
}
module.exports = uploadContr;
