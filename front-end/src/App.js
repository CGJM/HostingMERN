import React, {Component} from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Login from './Components/forms/login';
import Register from './Components/forms/register'
import Contact from './Components/others/contact'
import Carrousel from './Components/Carrosel/Carrosel';
import AuthComponent from './Components/Auths/indexAuth';
import Protected from './Components/Protected/protected';
import 'bootstrap/dist/css/bootstrap.min.css'



class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Carrousel} />
          <Route path="/registro" component={Register} exact/>
          <Route path="/login" component={Login} exact/>
          <Route path="/contact" component={Contact} exact/>
          <AuthComponent>
          <Route path="/protected" component={Protected} exact />
          </AuthComponent>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
