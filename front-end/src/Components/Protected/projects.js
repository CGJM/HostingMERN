import React, {Component} from 'react';
import axios from 'axios';
import NavHori from '../navbars/NavbarHorizontal'
import NavVertical from '../navbars/NavbarVertical'
import Upload from '../forms/uploadFile';
import { GoFileDirectory} from "react-icons/go";
import { FaPhp,FaHtml5,FaFileArchive } from "react-icons/fa"
import { MdDelete } from "react-icons/md";


class getProjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: '',
      info: [],
      counter:0,
      path: '',
      path2:'Home',
      extension:''
    }
  }
  componentDidMount() {
    this.asignar();
    this.getFolder();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if(this.state.counter===1){
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
    const der={
      data:JSON.parse(this.props.user)
    }
    try{
    const res = await axios.post('project/getProject', {
        project: der.data.usuario
    });
    this.setState({ info: res.data.archivos, path:res.data.path});
  }catch(error){
    console.error(error);
  }
}
  getFolderProject = async () => {
    const path=this.state.path;
    try{
      const res = await axios.post('project/getProject/getFilesProject', {
        project: path
      });
      this.setState({ info: res.data.archivos});
    }catch(error){
      console.error(error);
    }
  }



  render() {
    let count_click = 0;
    let ocultar=true;
    //400px centra el componente de la tabla
    return (
      <div>
      <NavHori />
      <NavVertical usuario={this.state.nom.usuario} />
      <div>
        <div style={{marginLeft: '250px',marginTop:'50px'}}className="container col-md-7">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item active" aria-current="page">{this.state.path2}</li>
            </ol>
          </nav>
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
            this.state.info.map(infa =>(
            <tr key={infa}>
              <th scope="row">{count_click+=1}</th>
              <td>{infa}</td>
              <td>{this.state.nom.usuario}</td>
              <td>
                <button
                    onClick={ ()=>this.setState(
                        {
                          counter:1,
                          path:this.state.path+'/'+infa
                        }
                        )}
                    className="btn btn-info">
                  {
                    (() => {
                      switch (infa.split('.').pop()) {
                        case "txt":   return <FaFileArchive />;
                        case "php": return <FaPhp />;
                        case "html":  return <FaHtml5 />;
                        default:      return <GoFileDirectory />;
                      }
                    })()
                  } Abrir
                </button>
              </td>
              <td><button className="btn btn-danger"><MdDelete /> Eliminar</button></td>
            </tr>
            ))
          }
          </tbody>
        </table>
        </div>
      </div>
        <div  aria-required="true" className="card text-center sticky-top" style={{width:'20rem',marginLeft:'1040px',marginTop:'-270px'}}>
          <div className="card-header text-center text-justify lead">
            Subir Archivos
          </div>
          <div  className="card-body">
            <Upload path={this.state.path}/>
          </div>
        </div>
      </div>
    )
  }
}

export default getProjects;