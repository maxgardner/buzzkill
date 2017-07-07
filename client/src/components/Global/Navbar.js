import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <header className="navbar">
        <section className="navbar-section">
          <a href="/" className="navbar-brand mr-10">Buzzkill</a>
        </section>
        <section class="navbar-section">
          <a href="#" className="btn btn-link">Log In</a>
          <a href="#" className="btn btn-link">Sign Up</a>
        </section>
      </header>
    );
  }
}

export default Navbar;
