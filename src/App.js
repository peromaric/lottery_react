import React from 'react';
import './App.css';
import lottery from './lottery';
import web3 from './web3';


class App extends React.Component {
  state = {
    manager: ''
  }
  async componentDidMount() {
    const manager = await lottery.methods.manager().call();
    console.log(await lottery.methods.manager().call());
    this.setState({ manager });
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
