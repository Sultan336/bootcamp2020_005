import React from 'react';
import logo from './logo.svg';
import './App.css';
import Parent from './Parent.js';
import CounterContext from './CounterContext';

function App() {
  return (
    <CounterContext.Provider>
      <div>
        <Parent name="Passing a name from parent file" />
      </div>
    </CounterContext.Provider>
  );
}

export default App;
