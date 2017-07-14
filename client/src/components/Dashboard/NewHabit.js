import React, { Component } from 'react';

class NewHabit extends Component {
  constructor() {
    super();
    this.state = {
      newHabit: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let newHabit = e.target.value;
    this.setState({
      newHabit
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.saveHabit(this.state.newHabit);
  }

  render() {
    return (
      <div className="container">
        <h2>Track A New Habit</h2>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <div className="form-group">
              <label htmlFor="habitName">
                Email
              </label>
              <input
                className="form-control"
                id="habitName"
                value={this.state.habitName}
                onChange={this.handleChange}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary">Submit</button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default NewHabit;
