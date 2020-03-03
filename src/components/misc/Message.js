import React from 'react'
import BarualService from '../../services/BarualService'
import Register from '../pages/Register'

export default class Message extends React.Component {
  state = {
    data: {
      name: '',
      email: '',
      phone: '', 
      message: ''
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
      BarualService.sendMessage(this.props.id, data)
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

    return (
      <div className="Message">
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

          <div className="form-group">
            <label htmlFor="phone">Phone</label>

            <input
              value={this.state.data.phone}
              onChange={this.handleChange}
              autoComplete="off"
              name="phone"
              type="number"
              className={`form-control ${errorClassName}`}
              id="phone"
              placeholder="Enter phone"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>

            <input
              value={this.state.data.message}
              onChange={this.handleChange}
              autoComplete="off"
              name="message"
              type="text"
              className={`form-control ${errorClassName}`}
              id="message"
              placeholder="Enter Message"
            />
          </div>

          <button
            type="submit"
            className="btn btn-block btn-primary mb-3"
            disabled={this.state.loading}
          >
            Send
          </button>
        </form>
      </div>
    )
  }
}