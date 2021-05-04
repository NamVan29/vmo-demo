import react, { Component } from 'react';

function Greeting(props) {
    return (
      <button onClick={props.onClick}>
        Login
      </button>
    );
  }

export default Greeting;
