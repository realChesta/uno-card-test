import React from 'react';
import './App.css';

import Card from './components/Card';

// standard playing card size:
// 62mm x 82mm

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Uno Card Prototype
        </p>
        <Card number="7" color="green"/>
      </header>
    </div>
  );
}

export default App;
