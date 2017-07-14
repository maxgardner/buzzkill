import React, { Component } from 'react';

import HabitCard from './HabitCard';

class Habits extends Component {
  render() {
    return (
      <div>
        <h2>Your Habits</h2>
        <div className="row">
          {this.props.habits.map((data, i) => {
            return (
              <div className="col-sm-12 col-md-3">
                <HabitCard
                  habitName={data.habitName}
                  createdAt={data.createdAt}
                  sessionCount={data.sessionCount}
                  index={i}
                  setHabit={this.props.setHabit}
                />
              </div>
            )
          })}
        </div>
        <a href="/newhabit" className="btn btn-secondary">Add a habit</a>
      </div>
    );
  }
}

export default Habits;
