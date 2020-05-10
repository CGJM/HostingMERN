import React,{ Component } from 'react';
import logo from './uptlogo.png';
import './css/navbar.css';
import {Link} from 'react-router-dom'
import Manual from "../PDFs/Manual de usuario.pdf";


class MenuWelcome extends Component{
render(){
return(
  <div>
<div className="container center">
  <nav className="menu">

    <div className="menu__right">
      <ul className="menu__list">
        <li className="menu__list-item">
          <Link className="menu__link" to="/">
          Inicio
          </Link>
        </li>
        <li className="menu__list-item">
          <Link className="menu__link" to="/login">
          Inicio de sesión
          </Link>
        </li>
        <li className="menu__list-item">
        <Link className="menu__link" to="/registro">
        Registro
        </Link>
        </li>
        <li className="menu__list-item">
        <Link className="menu__link" to="/contact">
        Contacto
        </Link>
        </li>
        <li className="menu__list-item">
          <Link className="menu__link" to={Manual} target="_blank">Manual</Link>
        </li>
      </ul>
    </div>
    <h1 style={{backgroundImage:'url('+logo+')'}} className="menu__logo">Universidad</h1>
  </nav>
</div>

</div>
)
}
}
export default MenuWelcome;
