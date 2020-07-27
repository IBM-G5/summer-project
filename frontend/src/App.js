import React from 'react';
import logo from './logo.svg';
import './App.css';

import GuestPage from './pages/GuestPage'
import LoginPage from './pages/LoginPage'

import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
      <Switch>
        <Route exact path="/" component ={LoginPage}></Route>
        <Route exact path="/guest" component ={GuestPage}></Route>
      </Switch>
      </Router>
    </div>

  );
}

export default App;
