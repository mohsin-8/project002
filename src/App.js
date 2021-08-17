import React, { useState } from 'react';
// import './App.css';
// import Hello from './Hello';
import Parent from './Parent';
import ValueContext from './ValueContext';

function App() {
  // let [number, setNumber] = useState(0);
  // function updateNumber() {
  //     console.log('update number successfully');
  //     setNumber(++number)
  //   }
  let value = useState(20);
  return (
    <ValueContext.Provider value={value}>
      <div className="App">
        {/* Hello World from {props.name} age is = {props.age}
      <Hello firstname="Zia" /> */}
        <Parent />
      </div>
    </ValueContext.Provider>
  );
}

export default App;
