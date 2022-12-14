import './App.css';
import React, { Component } from 'react'
import Counter from './Components/Counter';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {show : false};}

    handleClick = () => this.setState ({show : !this.state.show})
    
  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick}>Show/Hide</button>
        {this.state.show ? <Counter/> : null}
      

      </div>
    )
  }
}

