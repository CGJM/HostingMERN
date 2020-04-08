import React, {Component} from 'react';
import NavHori from '../navbars/NavbarHorizontal'
import NavVertical from '../navbars/NavbarVertical'

class Inicio extends Component{
  constructor(props){
  super(props);

  this.state={
    nom: ''
  }
}
asignData(){
  this.setState({
    nom: JSON.parse(this.props.user)
  });
}
componentDidMount(){
  this.asignData();
}

  render(){

    return(
      <div>
      <NavHori />
      <NavVertical usuario={this.state.nom.usuario}/>
    </div>
    )
  }
}
 export default Inicio;
