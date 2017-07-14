import React, { Component } from 'react';

const SessionCard = props => {
  return (
    <div className="card card-outline-primary">
      <div className="card-block">
        <h3>Session {props.index + 1}</h3>
        <p>First logged: {props.createdAt}</p>
      </div>
    </div>
  );
}

export default SessionCard;
