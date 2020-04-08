import React, {Component} from 'react';
import Navegation from '../navbars/MenuWelcome';
const axios = require('axios');

class Registro extends Component{
  constructor() {
      super();
      this.state = {
        nombre: '',
        apellido: '',
        correo: '',
        fechaNac: '',
        usuario: '',
        password: ''
        //db:''
      }
      this.change=this.change.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }
    change(e){
      this.setState({
        [e.target.name]: e.target.value
      })
    }
    cancelCourse = () => {
  document.getElementById("create-course-form").reset();
}
    onSubmit(e){
      e.preventDefault();
      axios.post('http://127.0.0.1:3001/users/', {
        nombre: this.state.nombre,
        apellido: this.state.apellido,
        correo: this.state.correo,
        fechaNac: this.state.fechaNac,
        usuario: this.state.usuario,
        password: this.state.password
        //db:this.state.db
      })
      this.cancelCourse();
    }
    render() {
      return (
      <div>
        <Navegation />
      <div className="container col-md-3">
        <form id="create-course-form"onSubmit={e => this.onSubmit(e)} >
          Nombre:<input type="text" className="form-control" onChange={e => this.change(e)} value={this.state.nombre} name="nombre"></input>
          Apellido:<input type="text" className="form-control" onChange={e => this.change(e)} value={this.state.apellido}  name="apellido"></input>
          Correo:<input type="email" className="form-control" onChange={e => this.change(e)} value={this.state.correo} name="correo"></input>
          Fecha de Nacimiento:<input type="date" className="form-control" onChange={e => this.change(e)}value={this.state.fechaNac} name="fechaNac"></input>
          Usuario:<input type="text" className="form-control" onChange={e => this.change(e)} name="usuario"value={this.state.usuario}></input>
          Contraseña:<input type="password" className="form-control"onChange={e => this.change(e)} value={this.state.password}name="password" ></input>
          <br />
          <button type="submit" className="btn btn-lg  btn-block btn-primary">Guardar</button>

        </form>

      </div>
      </div>
      )
    }
}
export default Registro;
