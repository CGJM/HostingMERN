const fse = require('fs-extra');
const fs = require('fs');
const project = {};

project.createProject = (req, res) => {
  if (!req.param('project') || !req.param('usuario')) {
    console.log('Faltan datos');
  }
  const dir = req.param('usuario') + '/' + req.param('project')
  fse.ensureDir(dir, err => {
    console.log('El directorio no se pudo crear ', err)
  })
}
project.getInfoFolderUser = (req, res) => {
  if (!req.param('project')) {
    console.log('Faltan datos para folder USer');
  }
  var path='/var/pruebas/'+req.param('project');
  fs.readdir(path, function(err, archivos) {
    if (err) {
      onError(err);
      return;
    }
    return res.json({archivos,path});
  });
}
project.getFolderProjects=(req,res)=>{
  if (!req.param('project')) {
    console.log('Faltan datos para folder');
  }
  var path=req.param('project');
  fs.readdir(path, function(err, archivos) {
    if (err) {
      onError('Soy error de backen',err);
      return;
    }
    return res.json({archivos});
  });
}

module.exports = project;
