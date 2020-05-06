const {Router}= require('express');
const router=Router();
const rimraf=require('rimraf')
const fs=require('fs')
const {createProject,getInfoFolderUser,getFolderProjects,deleteFile}=require('../Controllers/projectController');


router.route('/project')
  .post(createProject)
router.route('/getProject')
  .post(getInfoFolderUser);
router.route('/getProject/getFilesProject')
    .post(getFolderProjects);
router.delete('/delete/', function(req, res, next) {
    const file = req.param('file');
    const type=req.param('type');
    if (type===""){
        rimraf.sync(file)
    }
    else{
        fs.unlink(file,(err)=>{
            if(err) throw err;
        })
    }
    return res.send("Exitoso")
})
module.exports=router;
