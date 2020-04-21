const {Router}= require('express');
const router=Router();
const {createProject,getInfoFolderUser,getFolderProjects}=require('../Controllers/projectController');


router.route('/project')
  .post(createProject);
router.route('/getProject')
  .post(getInfoFolderUser);
router.route('/getProject/getFilesProject')
    .post(getFolderProjects);

module.exports=router;
