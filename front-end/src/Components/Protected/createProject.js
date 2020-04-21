import React, {
  Component
} from 'react'
import axios from 'axios';
import NavHori from '../navbars/NavbarHorizontal'
import NavVertical from '../navbars/NavbarVertical'


class Project extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nom: '',
      project:''
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
  onChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  submit(e){
    const response = window.confirm('¿Seguro de crear este proyecto?');
       if (response) {
           axios.post('project/project',{
             project:this.state.project,
             usuario:this.state.nom.usuario
           },
           window.confirm('Proyecto creado')
         );
       }
  }
  render() {
    return (
      <div>
        <NavHori />
        <NavVertical usuario={this.state.nom.usuario} />
        <div style={{marginLeft: '500px',padding: '100px'}}>
          <div className="text-justify lead" style={{marginLeft: '22px'}}>
            <h1>Crear un proyecto</h1>
          </div>
          <div className="info">
          <div style={{marginLeft: '22px'}} className="container col-md-6">
            <div className="input-group mb-4">
              <input type="text" className="form-control" onChange={e=>this.onChange(e)}placeholder="Nombre del proyecto"  value={this.state.project} name="project" aria-label="Recipient's username" aria-describedby="button-addon2" />
              <div className="input-group-append">
                <button onClick={e=>this.submit(e)}className="btn btn-success" type="button" id="button-addon2">Button</button>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    )
  }
}

export default Project;
