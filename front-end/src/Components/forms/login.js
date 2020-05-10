import React, {Component} from 'react';
import axios from 'axios';
import Navegation from '../navbars/MenuWelcome';
import Foo from '../others/footer';

class Login extends Component{
  constructor(props){
    super(props);
    this.state={
      user:'',
      password: '',
      validación:undefined
    };
    this.change = this.change.bind(this);
    this.submit = this.submit.bind(this);
  }

  change(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleValidation = async () => {
    let pass = this.state.password
    let user = this.state.user;
    let formValid = true;
    if (user===''){
      formValid=false;
    }
    if (pass===''){
      formValid=false;
    }
    return this.setState({validacion: formValid});
  }

  submit=async (e)=> {
    e.preventDefault();
    await this.handleValidation()
    if (this.state.validacion===true) {
      axios.post('login/token', {
        usuario: this.state.user,
        password: this.state.password
      }).then(res => {
        localStorage.setItem('cool-jwt', res.data);
        this.props.history.push('/protected');
      });
    }else {
      alert("Favor de llenar el formulario.")
    }
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
  <Foo/>
  </div>
)}
}

export default Login;
