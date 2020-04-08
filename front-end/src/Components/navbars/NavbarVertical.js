import React, {Component} from 'react';
import './css/NavBarVertical.css';
import {Link} from 'react-router-dom'

class Verti extends Component{
render(){
return(
<div className="wrapper">
  <div className="sidebar">
    <ul>
      <li><Link to="/"><i className="fas fa-home"></i>Proyectos</Link></li>
      <li><Link to="/"><i className="fas fa-user"></i>Nuevo proyecto</Link></li>
      <li><Link to="/"><i className="fas fa-address-card"></i>Inicio</Link></li>
      <li><Link to="/"><i className="fas fa-project-diagram"></i>Mi base de datos</Link></li>
      <li><a><i className="fas fa-project-diagram"></i>Bienvenido: {this.props.usuario}</a></li>
    </ul>
  </div>
</div>
)
}
}

export default Verti
