import React from 'react'
import {Link} from 'react-router-dom'


class Home extends React.Component {
  render() {
    return (
      <div className='Home' > 
        <h1>Encuentrá la casa de tus sueños</h1>

        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/edificios.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="/kitchen.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
             <img src="/sala.jpg" className="d-block w-100" alt="..." />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>

        <div className='contact-info'>
          <p>Teléfono: 976418176</p>
          <p>email:  administracion@barual.com</p>
          <p>Dirección: Avda Cesareo Alierta, 11 - 50008 - Zaragoza </p>
        </div>

        <div>
          <h2> Qué buscas?</h2>
          <div className='house'>
            <Link className="" to="/properties">
              <strong>Propiedades</strong>
            </Link>  
          </div>
        </div>
      
      </div>
      
      
  )
    
  }
}

export default Home