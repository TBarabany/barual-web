import React from 'react'
import {Link} from 'react-router-dom'
import { WithAuthConsumer } from '../../contexts/AuthContext'
import Login from '../pages/Login'


const Footer = ({ currentUser, logout }) => {
  return (
    <div className="Footer">
      <footer className="container ">
        {currentUser && (
            <div className="float-right">
              <button className="btn btn-info btn-sm" onClick={logout}>
                <i className="fa fa-power-off"/>
              </button>
            </div>
          )}
          {!currentUser && (
            <div className="float-right">
              <p className="float-right"><Link to="/login">Login</Link></p>
            </div>
          )}
        <p>© 2017-2019 Barual, S.L. · <Link to="#">Privacy</Link> · <Link to="#">Terms</Link></p>
      </footer>
      
    </div>

    
  )
}

export default WithAuthConsumer(Footer)
