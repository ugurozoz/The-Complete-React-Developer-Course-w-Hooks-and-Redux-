import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components'
import Person from './Person/Person';

const StyledButton = styled.button`
  background-color:${props => props.alt ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover{
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};;
    color: black;
  }`

class App extends Component {
  state = {
    persons: [
      { id:'prs1', name: 'Max', age: 28 },
      { id:'prs2', name: 'Manu', age: 29 },
      { id:'prs3', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  };


  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });

  }

 

  nameChangeHandler = (event, id) => {
    /* My aproach */
    // const persons = [...this.state.persons];
    // persons.map(person => {
    //   if (person.id === id) {
    //     person.name = event.target.value;
    //   }
    //   return person
    // });
  /** */
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value
    const persons = [...this.state.persons];

    persons[personIndex] = person


    
    
    
    this.setState({persons: persons});

  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})

    console.log(this.state)
    
    
  }

  render() { 
    let persons = null;

    if (this.state.showPersons) {      
      persons = (
        <div>
          {this.state.persons.map((person,index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangeHandler(event,person.id)}
              />
            )            
          })}  
        </div>
      );      
    }
    
    const classes = [];//'red', 'bold'
    if (this.state.persons.length <= 2) {
      classes.push('red')
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold')
    } 


    return (
      
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          <StyledButton alt={this.state.showPersons} onClick={this.togglePersonsHandler}>
            Toggle Persons
          </StyledButton>        
          {persons}
        </div>
      
      
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;