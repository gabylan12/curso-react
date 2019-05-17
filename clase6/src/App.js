import React from 'react';
import './App.css';
import Counter from './Counter.js';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoApp from './reducer'






/* Increment */
function handleIncrement(e) {
  store.dispatch(addIncrement(e.actionName,e.value));
}

const Increment = (props) => <button onClick={event => handleIncrement(props)}>{props.actionName}</button>;


const addIncrement = (actionName,number) => {
  return {
    type: actionName,
    payload: number
  };

}

/*Number Input */
const setValue = (number) => {
  
  return {
    type: "SET_VALUE",
    payload: number
  };

}

function handleInput(e) {
  store.dispatch(setValue(e.target.value));
}

const Number = (props) => <input type="text" onChange={event => handleInput(event)} />;

/*APP*/

let store = createStore(todoApp)


function App() {
  return (
    <>
      <Provider store={store}>
        <Counter counter="0"/>
        <Increment actionName="INCREMENT" value="1"/>
        <Increment actionName="DECREMENT" value="1"/>
        <Increment actionName="RESET" value="0"/>
        <Number />
      </Provider>
    </>
  );
}

export default App;
