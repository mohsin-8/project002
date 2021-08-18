import React, { createContext } from 'react';
// import UseState from './components/UseState';
// import UseReducer from './components/UseReducer';
import ComponentA from './components/ComponentA';

const FirstName = createContext();
const LastName = createContext();

function App() {
  return (
    <>
      <FirstName.Provider value={'Mohsin'}>
        <LastName.Provider value={'Ali Khan'}>
          {/* <UseState /> */}
          {/* <UseReducer /> */}
          <ComponentA />
        </LastName.Provider>
      </FirstName.Provider>
    </>
  )
}

export default App;
export { FirstName, LastName };