import React, {Component} from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Navegation from './Components/navbars/MenuWelcome';
import Login from './Components/forms/login';
import Register from './Components/forms/register'
import Contact from './Components/others/contact'
import Carrousel from './Components/Carrosel/Carrosel';
import 'bootstrap/dist/css/bootstrap.min.css'



class App extends Component{
  render(){
    return(
      <BrowserRouter>
      <Navegation />
        <Switch>
          <Route path="/" exact component={Carrousel} />
          <Route path="/registro" component={Register} exact/>
          <Route path="/login" component={Login} exact/>
          <Route path="/contact" component={Contact} exact/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
