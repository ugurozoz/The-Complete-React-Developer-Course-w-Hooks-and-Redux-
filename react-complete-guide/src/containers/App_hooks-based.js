import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Ugur', age: 44 },
      { name: 'Stef', age: 34 },
    ]
  })

  const [ otherState, setOtherState] = useState('Some other data')

  const switchNameHandler = () => {  
    setPersonsState({
      persons: [
        { name: 'Maximillian', age: 28 },
        { name: 'Ugur', age: 44 },
        { name: 'Stef', age: 34 },
      ]
    })
  } 

  console.log(personsState, otherState)

  

  
  return (
    <div className="App">
      <h1>I'm a react app</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}         
        />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}         
        />
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      >My Hobbies: Cycling
      </Person>
    </div>
  );
  // return React.createElement('div', {className: 'App'}, 'h1', 'I\'m a react app' )
  
}

export default App;




