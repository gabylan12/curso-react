import React from 'react';
import './App.css';
import {  connect  } from 'react-redux';


class Counter extends React.Component {
    render() {
      return (
        <>
          <h1>{this.props.counter}</h1>
        </>)
    }
  }

  const mapStateToProps = (state) => ({
    counter: state.counter
  })
  const mapDispatchToProps = (dispatch, ownProps) => ({
    //addTodo: text => dispatch(addTodo(text))
  })

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Counter);
  