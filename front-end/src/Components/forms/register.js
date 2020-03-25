import React, {Component} from 'react';
import Navegation from '../navbars/MenuWelcome';
const axios = require('axios');
//import 'materialize-css/dist/css/materialize.min.css'
class Registro extends Component{

state={
name:'',
lastname:'',
correo:'',
date:'',
user:'',
password:''
//db:''
}

onChangeName=(e)=>{
this.setState({
name:e.target.value,
//db:e.target.value
})
}
onChangeLastName=(e)=>{
  this.setState({
  lastname:e.target.value
  })
}
onChangeCorreo=(e)=>{
  this.setState(
    {correo:e.target.value}
  )
}
onChangeDate=(e)=>{
  this.setState(
    {date:e.target.value}
  )
}
onChangeUser=(e)=>{
  this.setState(
    {user:e.target.value}
  )
}
cancelCourse = () => {
  document.getElementById("create-course-form").reset();
}
onChangePassword=(e)=>{
  this.setState(
    {password:e.target.value}
  )
}
onSubmit=async e=>{
  e.preventDefault();
  await axios.post('http://127.0.0.1:3001/users/',{
    Nombre:this.state.name,
    Apellido:this.state.lastname,
    Correo:this.state.correo,
    FechaNac:this.state.date,
    Usuario:this.state.user,
    Contraseña:this.state.password,
    //db:this.state.db
  })
this.cancelCourse();
}
render(){
return(
  <div>
  <Navegation />
<div className="container col-md-3">
  <form id="create-course-form" onSubmit={this.onSubmit} >
    Nombre:<input type="text" className="form-control" onChange={this.onChangeName} name="nombre"></input>
    Apellido:<input type="text" className="form-control" onChange={this.onChangeLastName}  name="apellido"></input>
    Correo:<input type="email" className="form-control" onChange={this.onChangeCorreo} ></input>
    Fecha de Nacimiento:<input type="date" className="form-control" onChange={this.onChangeDate} ></input>
    Usuario:<input type="text" className="form-control" name="usuario" onChange={this.onChangeUser} ></input>
    Contraseña:<input type="password" className="form-control" name="pas" onChange={this.onChangePassword} ></input>
    <br />
    <button type="submit" className="btn btn-lg  btn-block btn-primary">Guardar</button>

  </form>

</div>
</div>
)
}
}
export default Registro;
