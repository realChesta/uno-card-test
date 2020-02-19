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
                <div className="card-list">
                    <Card number="+2" color="blue"/>
                    <Card number="reverse" color="yellow"/>
                    <Card number="choose"/>
                    <Card number="+4"/>
                </div>
            </header>
        </div>
    );
}

export default App;
