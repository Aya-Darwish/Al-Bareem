import React from 'react';
import './App.css';
import HeaderMenu from './Header.js';
import Welcome from './Welcome';
import AboutUs from './AboutUs';
import Program from './Program';


function App() {
  return (
    <div className="App">
      <HeaderMenu />
      <Welcome />
      <AboutUs />
      <Program />
    </div>
  );
}

export default App;