import React from 'react';
import './App.css';
import HeaderMenu from './Header.js';
import Welcome from './Welcome';
import AboutUs from './AboutUs';

function App() {
  return (
    <div className="App">
      <HeaderMenu />
      <Welcome />
      <AboutUs />
    </div>
  );
}

export default App;