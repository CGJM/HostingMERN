import React, {Component} from 'react';
import './css/NavBarVertical.css';
import {Link} from 'react-router-dom';
import { GoGitBranch,GoDatabase } from "react-icons/go";
import { MdQueue,MdAssignmentInd } from "react-icons/md";
import { IoIosHome } from "react-icons/io";

class Verti extends Component{
render(){
return(
  <div>
<div className="wrapper">
  <div className="sidebar">
    <ul>
      <li><Link to="/getProjects"><GoGitBranch /> Proyectos</Link></li>
      <li><Link to="/createProject"><MdQueue /> Nuevo proyecto</Link></li>
      <li><Link to="/protected"><IoIosHome/> Inicio</Link></li>
      <li><Link to="/"><GoDatabase /> Mi base de datos</Link></li>
      <li style={{color:"white"}}><MdAssignmentInd/> Bienvenido: {this.props.usuario}</li>
    </ul>
  </div>
</div>
</div>
)
}
}

export default Verti
