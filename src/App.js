import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Parent from './Parent.js';
import CounterContext from './CounterContext';

function App() {
  let countState = useState(1)
  //let [count, SetCount] = useState(205)
  return (
    <CounterContext.Provider value={countState}>
      <div>
        <Parent />
      </div>
    </CounterContext.Provider>
  );
}

export default App;
