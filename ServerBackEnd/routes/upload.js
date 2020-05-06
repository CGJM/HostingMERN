const {Router} = require('express');
const router = Router();
var multer = require('multer')
const {uploadFile,file} = require('../Controllers/uploadFile');

let path;
router.route('/')
    .post(uploadFile)

router.post('/asignar',function (req,res) {
    path=req.param('path')
})

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path)
    },
    filename: function (req, file, cb) {
        cb(null,file.originalname )
    }
})

var upload = multer({ storage: storage }).single('noren')

router.post('/upload',function(req, res) {
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
        return res.status(200).send(req.file)

    })

});

module.exports = router;
