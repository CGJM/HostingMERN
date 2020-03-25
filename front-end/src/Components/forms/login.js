import React, {Component} from 'react';
<<<<<<< HEAD
import axios from 'axios';
import Navegation from '../navbars/MenuWelcome';

class Login extends Component{
  constructor(props){
    super(props);
    this.state={
      user:'',
      password:''
    };
    this.change=this.change.bind(this);
    this.submit=this.submit.bind(this);
  }
  change(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  submit(e){
    e.preventDefault();
    axios.post('login/token',{
      usuario: this.state.user,
      password: this.state.password
    }).then(res =>{
      localStorage.setItem('cool-jwt',res.data);
      this.props.history.push('/protected');
  });
  }
  render(){
  return(
    <div>
    <Navegation />
    <div className="container col-md-3">
    <form onSubmit={e => this.submit(e)} >
      Usuario:<input type="text" className="form-control" name="user" onChange={e => this.change(e)} value={this.state.user} ></input>
      Contraseña:<input type="password" className="form-control" name="password" onChange={e =>this.change(e)} value={this.state.password} ></input>
      <br />
      <button type="submit" className="btn btn-lg  btn-block btn-primary">Iniciar</button>
    </form>
  </div>
  </div>
=======
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
>>>>>>> 839b1d01e863d25125bad01ad59132adcf6d11dd
  )
}
}
export default Login;
