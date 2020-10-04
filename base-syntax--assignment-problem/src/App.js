import React, { Component } from 'react';
import UserInput from "./UserInput/UserInput"
import './App.css';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    users: [{ username: "userinstate" }] 
  }

  changeUserName = (event) => {
    //console.log("change user name")
    this.setState({
      users: [{ username: event.target.value }] 
    })
  }


  render() {
    return (
      <div className="App">
        <UserInput change={this.changeUserName} />
        <UserOutput username="ugur"  />
        <UserOutput username={this.state.users[0].username} />
        <UserOutput username="ugur" />
        <UserOutput username="ugur" />        
      </div>
    );
  }
}

export default App;
