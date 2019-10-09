import React from 'react';
import './App.css';
import Project from './Project';

function App() {

  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  return (
    <div className="App">
      <Project />
    </div>
  );
}

export default App;
