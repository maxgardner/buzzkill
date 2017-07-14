import React, { Component } from 'react';
import { Route, NavLink } from "react-router-dom";

// Import the child components
import Navbar from './Global/Navbar';
import LandingPage from './LandingPage/LandingPage';
import LogIn from './LandingPage/LogIn';
import SignUp from './LandingPage/SignUp';
import Dashboard from './Dashboard/Dashboard';
import NewHabit from './Dashboard/NewHabit';
import Sessions from './Dashboard/Sessions';
import NewSession from './Dashboard/NewSession';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    }
    this.setUser = this.setUser.bind(this);
  }

  setUser(user) {
    this.setState({
      user
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <Route
          exact strict path="/"
          render={() => <LandingPage />}
        />
        <Route
          exact strict path="/signup"
          render={() => <SignUp />}
        />
        <Route
          exact strict path="/login"
          render={() => <LogIn setUser={this.setUser} />}
        />
        <Route
          exact strict path="/dashboard"
          render={() => <Dashboard
                          habits={this.state.habits}
                          setHabit={this.setHabit}
                        />}
        />
        <Route
          exact strict path="/newhabit"
          render={() => <NewHabit
                          saveHabit={this.saveHabit}
                        />}
        />
        <Route
          exact strict path="/sessions"
          render={() => <NewSession
                          habitid={this.state.habitid}
                          sessions={this.state.sessions}
                        />}
        />
        <Route
          exact strict path="/newsession"
          render={() => <NewSession
                          currentHabit={this.state.currentHabit}
                          questions={this.state.questions}
                          saveSession={this.saveSession}
                        />}
        />
      </div>
    );
  }
}

export default App;
