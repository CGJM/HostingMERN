import React, {Component} from 'react';
import Navegation from '../navbars/MenuWelcome';
import Foo from '../others/footer';

class Contact extends Component {
  render() {
      return (
          <div>
              <Navegation/>
              <div className="container col-sm-4 text-center">
                  <h1> Behind Code Zone </h1></div>
              <div className="container col-sm-3 text-center">
                  <h3> Desarrolladores: </h3></div>
              <div className="container col-sm-4 text-center">
                  <h3> Cristian Uriel Ortiz Osorio </h3></div>
              <div className="container col-sm-4 text-center">
                  <h3> Mario Etzael Francisco Melo </h3></div>
              <div className="container col-sm-4 text-center">
                  <h3> Uriel Edgardo Escobar Franco</h3></div>
              <div className="container col-sm-4 text-center">
                  <h3> Ivan Riveros García</h3></div>
              <Foo/>
          </div>
      )
  }
}
export default Contact;
