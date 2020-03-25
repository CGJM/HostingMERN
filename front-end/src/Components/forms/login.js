import React, {Component} from 'react';
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
  )
}
}
export default Login;
