import React from 'react'
import BarualService from '../../services/BarualService'
import { Link, Redirect } from 'react-router-dom'
import { WithAuthConsumer } from '../../contexts/AuthContext.js'

class Login extends React.Component {
  state = {
    data: {
      email: '',
      password: ''
    }, 
    error: false,
    loading: false
  }

  handleChange = (event) => {
    const { name, value } = event.target 

    this.setState({
      data: {
        ...this.state.data,
        [name]: value
      }
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

      this.setState({ loading: true, error: false }, () => {
        BarualService.login({ ...this.state.data })
          .then(
            (user) => {
              this.props.setUser(user)
            },
            () => {
              this.setState({ error: true, loading: false})
            }
          )
      })
  }

  render() {
    const errorClassName = this.state.error ? 'is-invalid' : ''

    if (this.props.currentUser) {
      return <Redirect to="/"/>
    }

    return (
      <div className="Login text"> 
        <form onSubmit={this.handleSubmit} className="form-signin">
          <img className="mb-4" src="/logo" alt="" width="72" height="72" />
          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
          <div className="form-group">
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              value={this.state.data.email}
              onChange={this.handleChange}
              autoComplete="off"
              name="email"
              className={`form-control ${errorClassName}`}
              id="email"
              placeholder="Enter email"
            />
          </div>

          <div className="form-group mb-5">
            <label htmlFor="password" className="sr-only">Password</label>
            <input
              value={this.state.data.password}
              onChange={this.handleChange}
              name="password"
              type="password"
              className={`form-control ${errorClassName}`}
              id="password"
              placeholder="Password"
            />
          </div>  

          <button
            type="submit"
            className= "btn btn-lg btn-primary btn-block"
            disabled={this.state.loading}
            >
              Log in 
          </button>
          
        </form>
      </div>
    )
  }
}

export default WithAuthConsumer(Login)