import React, {Component} from 'react'
//import axios from 'axios';
import {Link} from 'react-router-dom';


class navegationProject extends Component {
constructor(props) {
    super(props);
    this.state={
        path:''
    }
}

    redireccion(e){
        let path=this.props.path.split(e,1)+e;
        this.props.callback(path)
    }
    render() {
        let ruta = this.props.path.split("/").slice(5)
        return (
            <div>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        {
                            ruta.map(path => (
                                <li key={path} className="breadcrumb-item active" aria-current="page">
                                    <Link onClick={this.redireccion.bind(this,path)} to="#">{path}</Link>
                                </li>
                            ))
                        }
                    </ol>
                </nav>
            </div>
        )
    }
}

export default navegationProject;