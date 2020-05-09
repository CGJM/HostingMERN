import React, {Component} from 'react';
import {getJwt} from '../helpers/jwt';
import axios from 'axios';


const withAuth = WrappedComponent =>
  class extends Component {
    constructor(props){
    super(props);

    this.state={
      user: undefined
    }
  }

  componentDidMount(){
   this.getUser();
  }

  getUser() {
    const jwt = getJwt();
    if (!jwt) {
      this.setState({
        user: null
      });
      return;
    }

    axios.get('getUser', { headers: { Authorization: `Bearer ${jwt}`} }).then(res => {
      this.setState({
        user: res.data
      })
    });

  }
  render(){
    const { user } = this.state;
    if (user === undefined) {
      return (
          <div>
            <div className="container-fluid center border-primary" style={{marginTop: "55px"}}>
              <h1 className="text-center">Usuario o contraseña incorrecto</h1>
            </div>
            <div className="container-fluid center border-primary" style={{marginTop: "25px"}}>
              <h3 className="text-center">Favor de regresar al login</h3>
            </div>
          </div>
      )
    }

    if (user === null) {
      this.props.history.push('/login');
    }

    return <WrappedComponent {...this.user} user={JSON.stringify(this.state.user)}/>;
  }
};

export default withAuth;
