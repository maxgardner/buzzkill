import React, { Component } from 'react';
import {Redirect} from 'react-router';
import {Link} from 'react-router-dom';
import helpers from '../../utils/helpers';
import auth from '../../utils/auth';

class LogIn extends Component {
  constructor() {
    super();
    this.state = {
      email: null,
      password: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let user = { ...this.state };

    switch (e.target.id) {
      case 'email':
          user.email = e.target.value;
          break;
      case 'password':
          user.password = e.target.value;
          break;
    }
    this.setState({
      email: user.email,
      password: user.password
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    helpers.logIn(this.state.email, this.state.password)
    .then((err, token, data) => {
      if (err) {
        console.log(err);
      }
      this.props.setUser(data);
      auth.authenticateUser(token);
      <Redirect to="/dashboard" />
    });

  }

  render() {
    return (
      <div className="container">
        <h2>Log In</h2>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <div className="form-group">
              <label htmlFor="email">
                Email
              </label>
              <input
                className="form-control"
                id="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">
                Password
              </label>
              <input
                className="form-control"
                id="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary">Log In</button>
          </fieldset>
        </form>
        <br />
        <p>Don't have an account? <Link to="/signup">Sign up here</Link>!</p>
      </div>
    );
  }
}

export default LogIn;
