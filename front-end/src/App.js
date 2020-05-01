import React, {Component} from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Login from './Components/forms/login';
import Register from './Components/forms/register'
import Contact from './Components/others/contact'
import Carrousel from './Components/Carrosel/Carrosel';
import AuthComponent from './Components/Auths/indexAuth';
import Protected from './Components/Protected/Inicio';
import uploadFile from './Components/forms/uploadFile';
import createProject from './Components/Protected/createProject';
import getProjects from './Components/Protected/projects';
import modify from './Components/forms/modifyUser';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Carrousel} />
          <Route path="/registro" component={Register} exact/>
          <Route path="/login" component={Login} exact/>
          <Route path="/contact" component={Contact} exact/>
          <Route path="/uploadFile" component={AuthComponent(uploadFile)} exact />
          <Route path="/protected" component={AuthComponent(Protected)} exact />
          <Route path="/modifyUser" component={AuthComponent(modify)}exact />
          <Route path="/createProject" component={AuthComponent(createProject)}exact/>
          <Route path="/getProjects" component={AuthComponent(getProjects)}exact/>
          <Route path="*" component={()=>"404 not found page"}/>
        </Switch>
      </BrowserRouter>
    )
  }
}
export default App;
