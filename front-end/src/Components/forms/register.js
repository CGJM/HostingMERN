import React, {Component} from 'react';
import axios from 'axios';
import Navegation from '../navbars/MenuWelcome';

//import Foo from '../others/footer';

class Registro extends Component {
  constructor() {
    super();
    this.state = {
      nombre: '',
      apellido: '',
      correo: '',
      fechaNac: '',
      usuario: '',
      password: '',
      db: '',
      userConfirmed: [],
      dbConfirmed: [],
      errors: {},
      formValid: undefined
    }
    this.change = this.change.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  change(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit=async(e)=> {
    e.preventDefault();
    await this.handleValidation()
    if (this.state.formValid === true) {
      await axios.post('users/', {
        nombre: this.state.nombre,
        apellido: this.state.apellido,
        correo: this.state.correo,
        fechaNac: this.state.fechaNac,
        usuario: this.state.usuario,
        password: this.state.password,
        db: this.state.db
      }).then(() => {
        const response = window.confirm('Usuario creado');
        if (response) {
          this.props.history.push('/login');
        }
        this.props.history.push('/login');
      })
    } else {
      alert("El formulario tiene errores.")
    }
  }

  handleValidation = async () => {
    let pass = this.state.password
    let user = this.state.usuario;
    let dataB = this.state.db;
    let formValid = true;
    let errors = {};
    //PASSWORD
    if (!pass) {
      formValid = false
      errors["password"] = "No puede estar vacio";

    }
    if (pass !== "") {
      if (pass.length < 6) {
        formValid = false
        errors["password"] = "La contraseña debe de ser de 6 caracteres o más";
      }
    }
    //USUARIO
    if (!user) {
      formValid = false
      errors["usuario"] = "No puedee estar vacio";
    }
    if (user !== "") {
      if (user.length < 6) {
        formValid = false
        errors["usuario"] = "El usuario debe tener 6 caracteres o más";
      }
      const res = await axios.get('users/get/' + this.state.usuario)
      this.setState({userConfirmed: res.data.usuario})
      if (user === this.state.userConfirmed) {
        formValid = false
        errors["usuario"] = "Ya existe ese registro";
      }
    }
    //database
    if (!dataB) {
      formValid = false
      errors["db"] = "No puede estar vacio";
    }
    if (dataB !== "") {
      const res = await axios.get('users/db/' + this.state.db)
      this.setState({dbConfirmed: res.data.Db})
      if (dataB === this.state.dbConfirmed) {
        formValid = false
        errors["db"] = "Ya existe la base de datos";
      }
    }
    this.setState({errors: errors})
    return this.setState({formValid: formValid});
  }

  render() {
    return (
        <div>
          <Navegation/>
          <div className="container col-md-3">
            <form id="create-course-form" onSubmit={e => this.onSubmit(e)}>
              Nombre:<input type="text" className="form-control" onChange={e => this.change(e)}
                            value={this.state.nombre} name="nombre"></input>
              Apellido:<input type="text" className="form-control" onChange={e => this.change(e)}
                              value={this.state.apellido} name="apellido"></input>
              Correo:<input type="email" className="form-control" onChange={e => this.change(e)}
                            value={this.state.correo} name="correo"></input>
              Fecha de Nacimiento:<input type="date" className="form-control" onChange={e => this.change(e)}
                                         value={this.state.fechaNac} name="fechaNac"></input>
              Usuario:<input type="text" className="form-control" onChange={e => this.change(e)} name="usuario"
                             value={this.state.usuario}></input>
              <span className="error" style={{color: "red"}}>{this.state.errors["usuario"]}</span><br/>
              Contraseña:<input type="password" className="form-control" onChange={e => this.change(e)}
                                value={this.state.password} name="password"></input>
              <span className="error" style={{color: "red"}}>{this.state.errors["password"]}</span><br/>
              Nombre de la Base de datos:<input className="form-control" onChange={e => this.change(e)}
                                                value={this.state.db} name="db"></input>
              <span className="error" style={{color: "red"}}>{this.state.errors["db"]}</span><br/>
              <br/>
              <button type="submit" className="btn btn-lg  btn-block btn-primary">Guardar</button>

            </form>
          </div>

        </div>
    )
  }
}
export default Registro;
