import React, {Component} from 'react';
const axios = require('axios');
//import 'materialize-css/dist/css/materialize.min.css'
class Login extends Component{

  state={
  user:'',
  password:''
  //db:''
  }
  onChangeUser=(e)=>{
    this.setState(
      {user:e.target.value}
    )
  }
  onChangePassword=(e)=>{
    this.setState(
      {password:e.target.value}
    )
  }
  onSubmit=async e=>{
    e.preventDefault();
    await axios.get('http://127.0.0.1:4000/users/session/',{
      Usuario:this.state.user,
      Password:this.state.password
      //db:this.state.db
    })
  }
  render(){
  return(
  <div className="container col-md-3">
    <form onSubmit={this.onSubmit} >
      Usuario:<input type="text" className="form-control" name="usuario" onChange={this.onChangeUser} ></input>
      Contraseña:<input type="password" className="form-control" name="pas" onChange={this.onChangePassword} ></input>
      <br />
      <button type="submit" className="btn btn-lg  btn-block btn-primary">Guardar</button>
    </form>
  </div>
  )
}
}
export default Login;
