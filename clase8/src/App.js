import React from 'react';
import './App.css';
import Platforms from './Platforms.js'
import { Provider } from 'react-redux';
import reducer from './reducer'
import store from './store'

//let storeVar = store(reducer)

function App() {
  return (
    <>
     <Provider store={store}>
    <div className="App">
      <Platforms />
    </div>
    </Provider>
    </>
  );
}

export default App;
