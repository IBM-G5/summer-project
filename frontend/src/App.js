import React from 'react';
import logo from './logo.svg';
import './App.css';

import GuestPage from './pages/GuestPage'
import LoginPage from './pages/LoginPage'
import ProfessorPage from './pages/ProfessorPage'

import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
      <Switch>
        <Route exact path="/" component ={LoginPage}></Route>
        <Route exact path="/guest" component ={GuestPage}></Route>
        <Route exact path="/professor" component={ProfessorPage}></Route>
      </Switch>
      </Router>
    </div>

  );
}

export default App;
