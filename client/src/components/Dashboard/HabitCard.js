import React, { Component } from 'react';

const HabitCard = props => {
  return (
    <div className="card card-outline-primary">
      <div className="card-block">
        <h3>{props.habitName}</h3>
        <p>First logged: {props.createdAt}</p>
        <p>Sessions: {props.sessionCount}</p>
        <a href="/sessions" onClick={index => props.setHabit}>View Sessions</a>
      </div>
    </div>
  );
}

export default HabitCard;
