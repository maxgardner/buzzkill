import React, { Component } from 'react';

import Habits from '../Dashboard/Habits';

import helpers from '../../utils/helpers';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <div className="container">
          <div className="text-center">
          </div>
          <Habits habits={this.props.habits} setHabit={this.props.setHabit} />

        </div>
      </div>
    );
  }
}

export default Dashboard;
