import React, { Component } from 'react';
import UserInput from "./UserInput/UserInput"
import './App.css';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    users: [
      { username: "user1" },
      { username: "user2" },
      { username: "user3" },
      { username: "user4" }
    ] 
  }

  changeUserName = (event) => {
    //console.log("change user name")
    this.setState({
      users: [
        { username: "user1" },
        { username: event.target.value },
        { username: "user3" },
        { username: "user4" }
      ] 
    })
  }


  render() {
    const style = {
      backgroundColor: '#333',
      color: '#fefefe',
      padding: '10px',
      borderRadius: '4px',
      marginTop:'40px'

    }


    return (
      <div className="App">
        <UserInput change={this.changeUserName} inputValue={this.state.users[1].username} />
        <UserOutput username={this.state.users[0].username}  />
        <UserOutput username={this.state.users[1].username} />
        <UserOutput username={this.state.users[2].username} />
        <UserOutput username={this.state.users[3].username} />  
        
        <div style={style}>
          Ut mattis nisi sed urna finibus, tincidunt tincidunt est vulputate. Aenean blandit feugiat purus a facilisis. Maecenas convallis enim finibus magna ultricies eleifend. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum aliquam iaculis semper. Etiam at tortor finibus, tempor tortor eget, t
           
           
      </div>
      </div>
      
    );
  }
}

export default App;
