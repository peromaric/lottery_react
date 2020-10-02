import React from 'react';
import './App.css';
import web3 from './web3';
import lottery from './lottery';
 

class App extends React.Component {
  state = {
    manager: ''
  };

  componentDidMount() {
    this.managerCall();
  }

  async managerCall() {
    const manager = await lottery.methods.manager().call();
    this.setState({ manager: manager });
    console.log(lottery);
  }
  
  render() {
    return (
      <div>
        <h2>Lottery contract</h2>
        <p>This contract is managed by { this.state.manager }</p>
      </div>
    );
  }
}

export default App;