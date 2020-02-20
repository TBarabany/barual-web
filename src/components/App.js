import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './misc/Navbar'
import Home from './misc/Home'
import Properties from './properties/Properties'
import PropertyDetail from './properties/PropertyDetail'

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <Navbar/>

        <main className='container'>
          <BrowserRouter>
            <Switch>
              <Route exact path='/'>
                <Home/>
              </Route>

              <Route exact path='/properties'>
                <Properties/>
              </Route>

              <Route exact path='/properties/:id'>
                <PropertyDetail/>
              </Route>
            </Switch>
            
          </BrowserRouter>


        </main> 
      </div>
    )
  }
}


export default App;
