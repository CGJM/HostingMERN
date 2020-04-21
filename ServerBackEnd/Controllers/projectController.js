const fse = require('fs-extra');
const fs = require('fs');
const project = {};

project.createProject = (req, res) => {
  if (!req.param('project') || !req.param('usuario')) {
    console.log('Faltan datos');
  }
  const dir = '/var/pruebas/' + req.param('usuario') + '/' + req.param('project')
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
  console.warn('Backend '+req.param('project'))
  console.log('Hola',req.param('project'))
  if (!req.param('project')) {
    console.log('Faltan datos para folder 1111');
  }
  var path=req.param('project');
  fs.readdir(path, function(err, archivos) {
    if (err) {
      onError('Soy error de backend',err);
      return;
    }
    return res.json({archivos});
  });
}
module.exports = project;
