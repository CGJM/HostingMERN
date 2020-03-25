import React, {Component} from 'react';

class Inicio extends Component{
  componentDidMount(){
    const { myKey } = this.props.match.params
    console.log(myKey )
}
  submit(e){

      localStorage.removeItem('cool-jwt');
      this.props.history.push('/login');
  }

  render(){
    return(
      <div>
      <h1>Hola bienvenido</h1>
      <form onSubmit={e => this.submit(e)} >
      <label>{this.state.user}</label>
      <button type="submit" className="btn btn-lg  btn-block btn-primary">Salir</button>
      </form>
      </div>
    )
  }
}
 export default Inicio;
