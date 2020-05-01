import React, {Component} from "react";
import axios from 'axios';
import NavHori from "../navbars/NavbarHorizontal";
import NavVertical from "../navbars/NavbarVertical";
import { Redirect } from 'react-router-dom';

class update extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            apellido: '',
            correo: '',
            fechaNac: '',
            nom: '',
            errors: {}
        }
        this.change = this.change.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        this.asignData();
        this.getUser()
    }

    asignData() {
        this.setState({
            nom: JSON.parse(this.props.user)
        });
    }

    change(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = async (e) => {
        e.preventDefault();
        let errors = {}
        if (this.state.fechaNac) {
            await axios.put("users/", {
                nombre: this.state.nombre,
                apellido: this.state.apellido,
                correo: this.state.correo,
                fechaNac: this.state.fechaNac,
                usuario: this.state.nom.usuario,
            }).then(() => {
                window.confirm("Usuairo modificado exitosamente")
                return   <Redirect to='/protected' />
            })
        } else {
            alert("El formulario tiene errores")
            errors["fecha"] = "No puede estar vacio";
            this.setState({errors: errors})
        }
    }
    getUser = async () => {
        let user = JSON.parse(this.props.user)
        const res = await axios.get('users/get/' + user.usuario)
        this.setState({
            nombre: res.data.Nombre,
            apellido: res.data.Apellido,
            correo: res.data.Correo
        })
    }

    render() {
        return (
            <div>
                <NavHori usuario={this.state.nom.usuario} database={this.state.nom.database}/>
                <NavVertical usuario={this.state.nom.usuario}/>
                <div className="container col-md-3">
                    <form id="create-course-form" onSubmit={e => this.onSubmit(e)}>
                        <h2 style={{color: 'black'}}>Modificar Usuario</h2>
                        Nombre:<input type="text" className="form-control" onChange={e => this.change(e)}
                                      value={this.state.nombre} name="nombre"></input>
                        Apellido:<input type="text" className="form-control" onChange={e => this.change(e)}
                                        value={this.state.apellido} name="apellido"></input>
                        Correo:<input type="email" className="form-control" onChange={e => this.change(e)}
                                      value={this.state.correo} name="correo"></input>
                        Fecha de Nacimiento:<input type="date" className="form-control" onChange={e => this.change(e)}
                                                   value={this.state.fechaNac} name="fechaNac"></input>
                        <span className="error" style={{color: "red"}}>{this.state.errors["fecha"]}</span><br/>
                        <br/>
                        <button type="submit" className="btn btn-lg  btn-block btn-primary">Guardar</button>

                    </form>
                </div>
            </div>
        )
    }
}

export default update;