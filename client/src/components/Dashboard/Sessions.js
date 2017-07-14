import React, { Component } from 'react';

import SessionCard from './SessionCard';

class Sessions extends Component {
  render() {
    return (
      <div className="container dashboard">
        <h2>Eating junk food - Sessions</h2>
        <div className="row">
          {this.props.sessions.map((data, i) => {
            return (
              <div className="col-sm-12 col-md-3">
                <SessionCard
                  createdAt={data.createdAt}
                  index={i}
                />
              </div>
            )
          })}
        </div>
        <a href="/newsession" className="btn btn-secondary">Add a session</a>
      </div>
    );
  }
}

export default Sessions;
