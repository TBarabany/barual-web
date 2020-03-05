import React from 'react'
import {Switch, Route} from 'react-router-dom'


import Navbar from './misc/Navbar'
import Home from './pages/Home'
import Properties from './pages/Properties'
import PropertyDetail from './pages/PropertyDetail'
import Login from './pages/Login'
import Register from './pages/Register'
import Footer from './misc/Footer'

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <Navbar/>

        <main className='container margin-navbar'>
            <Switch>
              <Route exact path='/'>
                <Home/>
              </Route>

              <Route exact path='/properties'>
                <Properties/>
              </Route>

              <Route exact path='/properties/:id' component={PropertyDetail} />

              <Route exact path="/login">
                <Login/>
              </Route>

              <Route exact path="/register">
                <Register/>
              </Route>
              
            </Switch>

        </main> 
      <Footer/>
      </div>
    )
  }
}


export default App