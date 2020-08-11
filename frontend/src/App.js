import React from 'react';
import './App.css';

import GuestPage from './pages/GuestPage'
import LoginPage from './pages/LoginPage'
import ProfessorPage from './pages/ProfessorPage'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
      <Switch>
        <Route exact path="/" component ={LoginPage}/>
        <Route exact path="/guest" component ={GuestPage}/>
        <Route exact path="/professor" component={ProfessorPage}/>
      </Switch>
      </Router>
    </div>

  );
}

export default App;
