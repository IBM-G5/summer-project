import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navi from './components/Navi'
import LoginContainer from './components/LoginContainer'

function App() {
  return (
    <div className="App">
      <Navi/>
      <LoginContainer/>
    </div>
  );
}

export default App;
