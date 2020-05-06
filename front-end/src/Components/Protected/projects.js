import React, {Component} from 'react';
import axios from 'axios';
import NavHori from '../navbars/NavbarHorizontal'
import NavVertical from '../navbars/NavbarVertical'
import Upload from '../forms/uploadFile';
import CreateFolder from '../forms/createFolder';
import NavegationProject from "../navbars/navegationProject";
import {GoFileDirectory} from "react-icons/go";
import {IoLogoJavascript} from "react-icons/io"
import {FaPhp, FaHtml5, FaFileArchive, FaCss3Alt} from "react-icons/fa"
import {MdDelete} from "react-icons/md";


class getProjects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nom: '',
            info: [],
            counter: 0,
            path: '',
            extension: '',
            disabled: true,
            disabledFiles:false
        }
    }

    componentDidMount() {
        this.asignar();
        this.getFolder();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.counter === 1) {
            this.setState({counter: 2})
            this.getFolderProject();
        }
    }

    asignar() {
        this.setState({
            nom: JSON.parse(this.props.user)
        })
    }


    getFolder = async () => {
        const der = {
            data: JSON.parse(this.props.user)
        }
        try {
            const res = await axios.post('project/getProject', {
                project: der.data.usuario
            });
            this.setState({info: res.data.archivos, path: res.data.path});
        } catch (error) {
            console.error(error);
        }
    }
    getFolderProject = async () => {
        const path = this.state.path;
        try {
            const res = await axios.post('project/getProject/getFilesProject', {
                project: path
            });
            this.setState({info: res.data.archivos});
        } catch (error) {
            console.error(error);
        }
    }
    info=async(result)=>{
        this.setState({info: [], path:result})

        if (result==="/var/pruebas/"+this.state.nom.usuario){
            this.setState({disabled:true})
        }
        try {
            const res = await axios.post('project/getProject/getFilesProject', {
                project: result
            });
            this.setState({info: res.data.archivos});
        } catch (error) {
            console.error(error);
        }
    }
    delete=async (e)=> {
        let file = e.split('.').pop();
        let type;
        if (file === "txt" || file === "php" || file === "css" || file === "js" || file === "html") {
            window.confirm("Seguro de eliminar este archivo")
            type = "archivo";
        } else {
            window.confirm("Seguro de elimnar este directorio")
            type = "";
        }
        await axios.delete('project/delete/', {
            data:{
                file: this.state.path+"/"+e,
                type: type
            }
        }).then(res=>{
            if (res){
                window.confirm("Se elimino con exito")
            }
        });
    }
    render() {
        let count_click = 0;
        return (
            <div>
                <NavHori/>
                <NavVertical usuario={this.state.nom.usuario}/>
                <div>
                    <div style={{marginLeft: '250px', marginTop: '50px'}} className="container col-md-7">

                        <div className="row">
                            <div aria-required="true" className="card text-center"
                                 style={{width: '18rem', position: "fixed", left: "77%"}}>
                                <div className="card-header text-center text-justify lead">
                                    Subir Archivos
                                </div>
                                <div className="card-body">
                                    <Upload path={this.state.path} disa={this.state.disabled}/>
                                </div>
                            </div>
                        </div>
                        <div className="row fixed-right">
                            <div aria-required="true" className="card text-center"
                                 style={{width: '18rem', position: "fixed", left: "77%", top: "290px"}}>
                                <div className="card-header text-center text-justify lead">
                                    Crear folder
                                </div>
                                <div className="card-body">
                                    <CreateFolder path={this.state.path} disa={this.state.disabled}/>
                                </div>
                            </div>
                        </div>
                        <NavegationProject path={this.state.path} callback={this.info.bind(this)}/>
                        <table className="table  table-bordered">
                            <thead className="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Proyecto</th>
                                <th scope="col">Usuario</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.info.map(infa => (
                                    <tr key={infa}>
                                        <th scope="row">{count_click += 1}</th>
                                        <td>{infa}</td>
                                        <td>{this.state.nom.usuario}</td>
                                        <td>
                                            {
                                                (() => {
                                                    switch (infa.split('.').pop()) {
                                                        case "txt":
                                                            return <button className="btn btn-success btn-block"><FaFileArchive/> Abrir</button>
                                                        case "php":
                                                            return <button disabled={true}  className="btn btn-info"><FaPhp/> Abrir</button>
                                                        case "css":
                                                            return <button disabled={true}  className="btn btn-info"><FaCss3Alt/>Abrir</button>
                                                        case "js":
                                                            return <button disabled={true}  className="btn btn-info"><IoLogoJavascript/>Abrir</button>
                                                        case "html":
                                                            return <button disabled={true} className="btn btn-info btn-lg"><FaHtml5/> Abrir</button>;
                                                        default:
                                                            return <button onClick={() => this.setState(
                                                                {
                                                                    disabled: false,
                                                                    counter: 1,
                                                                    path: this.state.path + '/' + infa,
                                                                }
                                                            )} className="btn btn-info"><GoFileDirectory/> Abrir</button>;
                                                    }
                                                })()
                                            }

                                        </td>
                                        <td>
                                            <button className="btn btn-danger" onClick={e => this.delete(infa)}>
                                                <MdDelete/> Eliminar
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default getProjects;
