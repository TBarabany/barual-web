import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
      <div className="navbar navbar-dark bg-dark fixed-top">
        <div >
          <Link className="navbar-brand  d-flex align-items-center" to="/">
            <img className = "mr-3" src='/logo1.png' alt="Logo" height="42" width="42"/>
            <strong>Barual</strong>
          </Link>
          
        </div>
      </div>
  )
}

export default Navbar