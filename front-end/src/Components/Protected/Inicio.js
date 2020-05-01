import React, {
  Component
} from 'react';
import NavHori from '../navbars/NavbarHorizontal';
import NavVertical from '../navbars/NavbarVertical';
import Node from '../Images/node-logo.jpg';
import ReactIma from '../Images/reactI.png';
import RedHat from '../Images/RedHat.jpg';

class Inicio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nom: ''
    }
  }
  asignData() {
    this.setState({
      nom: JSON.parse(this.props.user)
    });
  }
  componentDidMount() {
    this.asignData();
  }

  render() {

    return (
      <div>
        <NavHori usuario={this.state.nom.usuario} database={this.state.nom.database} />
        <NavVertical usuario={this.state.nom.usuario} />
        <div style={{marginLeft: '400px',marginTop:'50px'}}className="container col-md-7">
          <div className="card-deck">
            <div className="card">
              <img src={ReactIma}className="card-img-top" alt="saturated fat molecule"/>
              <div className="card-body">
                <h5 className="card-title">React Js</h5>
                <p className="card-text">React es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página. Mantenida por facebook.</p>
                <p className="card-text"><small className="text-muted">Info Hosting UPT</small></p>
              </div>
            </div>
            <div className="card">
              <img src={Node}className="card-img-top" alt="saturated fat molecule" />
              <div className="card-body">
                <h5 className="card-title">Node.js</h5>
                <p className="card-text">Node.js es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor basado en el lenguaje de programación ECMAScript, asíncrono, con E/S de datos en una arquitectura orientada a
                  eventos </p>
                <p className="card-text"><small className="text-muted">Info Hosting UPT</small></p>
              </div>
            </div>
            <div className="card">
              <img src={RedHat}className="card-img-top" alt="saturated fat molecule" />
              <div className="card-body">
                <h5 className="card-title">Red hat</h5>
                <p className="card-text">Red Hat, Inc. es una multinacional estadounidense de software que provee software de código abierto principalmente a empresas. Fundada en 1993, Red Hat tiene su sede corporativa en Raleigh, North Carolina, con oficinas
                  satélite en todo el mundo</p>
                <p className="card-text"><small className="text-muted">Info Hosting UPT</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Inicio;
