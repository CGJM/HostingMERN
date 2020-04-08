const multer = require('multer');
var fs = require('fs');
const uploadContr={};


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/var/pruebas');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

var upload = multer({ storage: storage })

uploadContr.uploadFile=upload.single('noren'),(req,res,next)=>{
  const file = req.file
  if (!file) {
    const error = new Error('Please upload a file')
    error.httpStatusCode = 400
    return next(error)

  }
    res.send({status:'ok'})
};
module.exports=uploadContr;
