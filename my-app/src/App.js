import React from 'react';
import './App.css';
import "./components/cards"


function App() {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <span id="Logo" className="navbar-brand mb-0 h1">Clicky Game</span>
        <span id="Instructions">Click an Image to Begin</span>
        <span id="scoreKeeper">Score: <span id="score">0</span> | Top Score: <span id="topScore">0</span></span>
      </nav>
      <div id="header">
      <div id="headerText">
        <p>Clicky Game</p>
        <p>Click on an image to earn points, but don't click on any more than once!</p>
        </div>
      </div>
      <div className="container">
     <div id="squirtle" className="card"></div>
     <div id="charmander" className="card"></div>
     <div id="jigglypuff" className="card"></div>
     <div id="dito" className="card"></div>
     <div id="magikarp" className="card"></div>
     <div id="digglet" className="card"></div>
     <div id="gastly" className="card"></div>
     <div id="haunter" className="card"></div>
     </div>
    </div>
  );
}

export default App;
