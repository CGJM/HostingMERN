import React, {Component} from 'react';
import './carrusel.css';
import Navegation from '../navbars/MenuWelcome';
import Foo from '../others/footer';
class Carrousel extends Component{
  render(){
    return(
      <div>
      <Navegation />
      <br /><br />
      <div id="carr" className="content-all">
        <div className="content-carrousel">
          <figure><img src="https://www.hidalguia.com.mx/gobierno/2014/140410-0430.jpg" alt="uno" /></figure>
          <figure><img src="http://www.upt.edu.mx/Contenido/OfertaEducativa/Profesional/ISC/images/ing_sistemas_01.jpg" alt="dos"/></figure>
          <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ4svmOGvbWKZaPzquWWGj9TIJmnOPnJzql5K_jCTKQLokUINo" alt="tres"/></figure>
          <figure><img src="http://www.upt.edu.mx/Contenido/OfertaEducativa/Profesional/ISC/images/Galeria/img_ISC_1.jpg" alt="cuatro" /></figure>
          <figure><img src="http://www.upt.edu.mx/Contenido/OfertaEducativa/Profesional/ISC/images/Galeria/img_ISC_4.jpg" alt="cinco"/></figure>
          <figure><img src="http://www.upt.edu.mx/Contenido/OfertaEducativa/Profesional/ISC/images/Galeria/img_ISC_5.jpg" alt="seis"/></figure>
          <figure><img src="http://www.upt.edu.mx/Contenido/OfertaEducativa/Profesional/ISC/images/Galeria/img_ISC_11.jpg" alt="ocho" /></figure>
          <figure><img src="http://www.upt.edu.mx/Contenido/OfertaEducativa/Profesional/ISC/images/Galeria/img_ISC_12.jpg" alt="nueve"/></figure>
          <figure><img src="http://www.upt.edu.mx/Contenido/OfertaEducativa/Profesional/ISC/images/Galeria/img_ISC_13.jpg" alt="diez"/></figure>
          </div>
        </div>
        <Foo />
        </div>
    )
  }
}
export default Carrousel;
