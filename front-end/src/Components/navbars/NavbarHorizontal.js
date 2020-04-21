import React,{ Component } from 'react';
import Arduino from '../PDFs/Documentación arduino.pdf';
import Php from '../PDFs/LARAVEL php.pdf';
import Python from '../PDFs/Python.pdf';
import { FaFilePdf,FaUserTimes } from "react-icons/fa";

class Horiz extends Component{
submit(e){
     localStorage.removeItem('cool-jwt');
 }
 state = {
    isOpenPDF: false

  };

  toggleOpenPDF = () => this.setState({ isOpenPDF: !this.state.isOpenPDF });
render(){
  const menuClass = `dropdown-menu${this.state.isOpenPDF ? " show" : ""}`;
return(
  <nav className="navbar sticky-top navbar-expand-lg navbar-light "style={{backgroundColor: '#4b4276'}}>
  <a className="navbar-brand" style={{color: 'white'}}>Hosting UPT</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a href={Arduino} target="_blank" className="nav-link" style={{color: 'white'}}>Arduino </a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle"  style={{color: 'white'}} onClick={this.toggleOpenPDF} id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Ejemplos restfull
        </a>
        <div className="dropdown-menu" className={menuClass} aria-labelledby="navbarDropdown">
          <a href={Php} target="_blank" className="dropdown-item" ><FaFilePdf/> PHP</a>
          <a href={Python} target="_blank"className="dropdown-item"><FaFilePdf/> Python</a>
        </div>
      </li>

    </ul>
          <form className="form-inline my-2 my-lg-0" onSubmit={e => this.submit(e)}>
          <button className="btn  my-4 my-sm-0" style={{color: 'white', backgroundColor: '#6B04C0'}} type="submit">
          <FaUserTimes/> Cerrar sesión
          </button>
          </form>
  </div>
</nav>
)
}
}

export default Horiz;
