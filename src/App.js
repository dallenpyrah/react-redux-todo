import React from 'react';
import './App.css';
import Todo from './features/todo/Todo'
import Coin from './features/coin/Coin'

function App() {
  return (
    <div className="App">
      <Todo />
      <Coin />
    </div>
  );
}

export default App;
