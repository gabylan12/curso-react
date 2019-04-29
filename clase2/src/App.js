import React from 'react';
import logo from './logo.svg';
import './App.css';


function Countdown(props){
  
 
  return <>
  <label>Contador</label>
  <input type="text" value={props.countdown}></input>
  
  </>;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

class InputExample extends React.Component {
  state = {
    currentCount: this.props.defaultCount,
    running: false

 }

 interval;

  countdown(){
      this.setState((prevState ) => (
        { running: true }
        ));
      
        if(!this.state.running){
          this.interval = setInterval(() => {
          console.log (this.state.currentCount);
          if(this.state.currentCount > 0){
              this.setState((prevState ) => (
                { currentCount: parseInt(prevState.currentCount) - 1 }
                ));
              }
          else{
            this.setState((prevState ) => (
              { running: false }
              ));    
            clearInterval(this.interval);
          }
          }, 1000);
          console.log ("FINISH");
        }
  }

  reset(){
    this.setState((prevState ) => (
      { currentCount: 0 }
      ));
    clearInterval(this.interval);
  }
  render() {
  return (<>
  <input
  type="text"
  value={this.state.currentCount}
  onChange={event => this.setState({ currentCount: parseInt(event.target.value) })}>
  </input>
  <br></br>
  <button onClick={event => this.setState({ currentCount: parseInt(this.state.currentCount) + 1 })}>START</button>
  <br></br>
  <button onClick={event => this.countdown() }>COUNTDOWN</button>
  <button onClick={event => this.reset() }>RESET</button>
  <br></br>
  <label >{this.state.currentCount}</label>
  </>
  );
  }
  }

function App() {
  return (
    <InputExample defaultCount="4"/>
  );
}

export default App;
