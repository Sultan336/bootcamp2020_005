import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Parent from './Parent.js';

function App() {
  let countState = useState(1)
  //let [count, SetCount] = useState(205)
  return (
    <CounterContext.Provider value={countState}>
      <div>
        <Parent />
      </div>
  );
}

export default App;
