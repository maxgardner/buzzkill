import React, { Component } from 'react';
import {Redirect} from 'react-router';
import {Link} from 'react-router-dom';
import helpers from '../../utils/helpers';
import auth from '../../utils/auth';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let user = { ...this.state };

    switch (e.target.id) {
      case 'first_name':
          user.firstName = e.target.value;
          break;
      case 'last_name':
          user.lastName = e.target.value;
          break;
      case 'email':
          user.email = e.target.value;
          break;
      case 'password':
          user.password = e.target.value;
          break;
    }
    this.setState({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    helpers.signUp(this.state.firstName, this.state.lastName, this.state.email, this.state.password)
    .then((err) => {
      if (err) {
        console.log(err);
      }
      <Redirect to="/login" />
    });

  }

  render() {
    return (
      <div className="container">
        <h2>Sign Up</h2>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <div className="form-group">
              <label htmlFor="first_name">
                First Name
              </label>
              <input
                className="form-control"
                id="first_name"
                value={this.state.firstName}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="last_name">
                Last Name
              </label>
              <input
                className="form-control"
                id="last_name"
                value={this.state.lastName}
                onChange={this.handleChange}
              />
            </div>
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
              className="btn btn-primary">Sign Up</button>
          </fieldset>
        </form>
        <br />
        <p>Already have an account? <Link to="/login">Log in here</Link>!</p>
      </div>
    );
  }
}

export default SignUp;
