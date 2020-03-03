import React from 'react'
import BarualService from '../../services/BarualService'
import { Link, Redirect } from 'react-router-dom'

class Register extends React.Component {
  state = {
    data: {
      name: '',
      surname: '', 
      email: '', 
      password: '',
    },
    error: false,
    loading: false,
    success: false
  }

  handleChange = (event) => {
    const { name, value, files } = event.target

    this.setState({
      data: {
        ...this.state.data,
        [name]: files ? files[0] : value
      }
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const { data } = this.state

    this.setState({ loading: true, error: false }, () => {
      BarualService.register(data)
        .then(() => {
          this.setState({ success: true })
        })
        .catch(() => {
          this.setState({ error: true, loading: false })
        })
    })
  }

  render() {
    const errorClassName = this.state.error ? 'is-invalid' : ''

    if (this.state.success) {
      return <Redirect to="/login"/>
    }

    return(
      <div className="Register">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>

            <input
              value={this.state.data.name}
              onChange={this.handleChange}
              autoComplete="off"
              name="name"
              type="text"
              className={`form-control ${errorClassName}`}
              id="name"
              placeholder="Enter name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="surname">Surname</label>
            <input
                value={this.state.data.surname}
                onChange={this.handleChange}
                autoComplete="off"
                name="surname"
                type="text"
                className={`form-control ${errorClassName}`}
                id="surname"
                placeholder="Enter surname"
              />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>

            <input
              value={this.state.data.email}
              onChange={this.handleChange}
              autoComplete="off"
              name="email"
              type="email"
              className={`form-control ${errorClassName}`}
              id="email"
              placeholder="Enter email"
            />
          </div>

          <div className="form-group mb-5">
            <label htmlFor="password">Password</label>

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
            className="btn btn-block btn-primary mb-3"
            disabled={this.state.loading}
          >
            Sign up
          </button>

        </form>
      </div>
    )
  }

  
}

export default Register
