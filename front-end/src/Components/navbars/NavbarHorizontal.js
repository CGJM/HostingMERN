import React,{ Component } from 'react';
import Arduino from '../PDFs/Documentación arduino.pdf';
import Php from '../PDFs/LARAVEL php.pdf';
import Python from '../PDFs/Python.pdf';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {FaFilePdf, FaUserTimes, FaUserEdit, FaUserSlash} from "react-icons/fa";

class Horiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpenPDF: false,
            isOpenMyInfo: false
        };
    }

    submit(e) {
        localStorage.removeItem('cool-jwt');
    }
    info(e){
        const response = window.confirm('¿Seguro de elimnar su cuenta '+this.props.usuario+"?");
        if (response){

            axios.delete("users/delete/",{data:{id:this.props.usuario,db:this.props.database}}).then(()=>{
                const respon = window.confirm('Cuenta eliminada');
                if (respon) {
                    localStorage.removeItem('cool-jwt');
                }
                else{
                    localStorage.removeItem('cool-jwt');
                }
            })
        }
    }
    toggleOpenMyInfo = () => this.setState({isOpenMyInfo: !this.state.isOpenMyInfo})
    toggleOpenPDF = () => this.setState({isOpenPDF: !this.state.isOpenPDF});

    render() {
        const menuClass = `dropdown-menu${this.state.isOpenPDF ? " show" : ""}`;
        const menuClassInfo = `dropdown-menu${this.state.isOpenMyInfo ? " show" : ""}`;
        return (
            <nav className="navbar sticky-top navbar-expand-lg navbar-light " style={{backgroundColor: '#4b4276'}}>
                <h3 className="navbar-brand" style={{color: 'white'}}>Hosting UPT</h3>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a href={Arduino} target="_blank" className="nav-link" style={{color: 'white'}}>Arduino </a>
                        </li>
                        <li className="nav-item dropdown">
                            <h6 className="nav-link dropdown-toggle" style={{color: 'white'}}
                                onClick={this.toggleOpenPDF}
                                id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                                Ejemplos restfull
                            </h6>
                            <div className="dropdown-menu" className={menuClass} aria-labelledby="navbarDropdown">
                                <a href={Php} rel="noopener" target="_blank" className="dropdown-item"><FaFilePdf/> PHP</a>
                                <a href={Python} target="_blank" className="dropdown-item"><FaFilePdf/> Python</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <h6 className="nav-link dropdown-toggle" style={{color: 'white'}}
                                onClick={this.toggleOpenMyInfo}
                                id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                                Mi información
                            </h6>
                            <div className="dropdown-menu" className={menuClassInfo} aria-labelledby="navbarDropdown">
                                <Link to="/modifyUser" className="dropdown-item"><FaUserEdit/> Modificar mi información</Link>
                                <Link onClick={e=>this.info(e)} to="#" className="dropdown-item"><FaUserSlash/> Eliminar mi cuenta</Link>
                            </div>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0" onSubmit={e => this.submit(e)}>
                        <button className="btn  my-4 my-sm-0" style={{color: 'white', backgroundColor: '#6B04C0'}}
                                type="submit">
                            <FaUserTimes/> Cerrar sesión
                        </button>
                    </form>
                </div>
            </nav>
)
}
}

export default Horiz;
