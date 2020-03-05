import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="bg-dark collapse show" id="navbarHeader">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-md-7 py-4">
              <h4 className="text-white">Acerca de Nosotros</h4>
              <p className="text-muted">Inmobiliaria Barual es una empresa familiar especializada en urbanizaciones en Aragón y Cataluña. Fue fundado en 1977 y actualmente administra más de 26,500 metros cuadrados de propiedades residenciales y comerciales.</p>
            </div>
            <div className="col-sm-4 offset-md-1 py-4">
              <h4 className="text-white">Contáctanos</h4>
              <ul className="list-unstyled">
                <li><Link to="#" className="text-white">976 41 81 76</Link></li>
                <li><Link to="#" className="text-white">Avda Cesareo Alierta, 11 - 50008 - Zaragoza</Link></li>
                <li><Link to="#" className="text-white">administracion@barual.com</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar navbar-dark bg-dark shadow-sm">
        <div className="container d-flex justify-content-between">
          <Link to="/" className="navbar-brand d-flex align-items-center">
            <img className = "mr-3" src='/logo1.png' alt="Logo" height="42" width="42"/>
            <strong>Barual</strong>
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="true" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    </div>

    
  )
}

export default Navbar