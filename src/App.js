import React from 'react';
import './App.css';
import Hello from './Hello';

function App(props) {
  return (
    <div className="App">
      Hello World from {props.name} age is = {props.age}
      <Hello firstname="Zia" />
    </div>
  );
}

export default App;
