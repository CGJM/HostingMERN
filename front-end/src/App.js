import React, {Component} from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
<<<<<<< HEAD
=======
import Navegation from './Components/navbars/MenuWelcome';
>>>>>>> 839b1d01e863d25125bad01ad59132adcf6d11dd
import Login from './Components/forms/login';
import Register from './Components/forms/register'
import Contact from './Components/others/contact'
import Carrousel from './Components/Carrosel/Carrosel';
<<<<<<< HEAD
import AuthComponent from './Components/Auths/indexAuth';
import Protected from './Components/Protected/protected';
=======
>>>>>>> 839b1d01e863d25125bad01ad59132adcf6d11dd
import 'bootstrap/dist/css/bootstrap.min.css'



class App extends Component{
  render(){
    return(
      <BrowserRouter>
<<<<<<< HEAD
=======
      <Navegation />
>>>>>>> 839b1d01e863d25125bad01ad59132adcf6d11dd
        <Switch>
          <Route path="/" exact component={Carrousel} />
          <Route path="/registro" component={Register} exact/>
          <Route path="/login" component={Login} exact/>
          <Route path="/contact" component={Contact} exact/>
<<<<<<< HEAD
          <AuthComponent>
          <Route path="/protected" component={Protected} exact />
          </AuthComponent>
=======
>>>>>>> 839b1d01e863d25125bad01ad59132adcf6d11dd
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
