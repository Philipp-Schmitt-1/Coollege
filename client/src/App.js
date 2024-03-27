import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="header">
        <h1>Coollege</h1>
        <p>Learn blockchain, earn rewards!</p>
      </div>

      <div className="course-list">
        {/* Sample course item */}
        <div className="course-item">
          <h2>Intro to Blockchain</h2>
          <p>This course provides an overview of blockchain technology and its applications.</p>
        </div>
        {/* More course items can be added */}
      </div>
    </div>
  );
}

export default App;
