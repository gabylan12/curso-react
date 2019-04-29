import React from 'react';
import logo from './logo.svg';
import './App.css';
export default Badge;

function Badge(props) {
    return <>
    <h1>Hola </h1>
     <p>Name{props.name}  {props.lastName}</p> 
     <p>Nickname {props.highlightNickname}</p>
     <img src={logo} className="App-logo" alt="logo" />
     <p className={props.highlightNickname}>Nickname {props.nickname} </p>
     </>;
   }