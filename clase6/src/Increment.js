import React from 'react';
import './App.css';
import Counter from './Counter.js';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoApp from './reducer'



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