import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light mb-5 border-bottom border-light">
      <div className="container d-flex align-items-center">
        <div>
          <a className="navbar-brand" href="/">
            <i className="fa fa-twitter"/>
            <strong>Barual</strong>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar