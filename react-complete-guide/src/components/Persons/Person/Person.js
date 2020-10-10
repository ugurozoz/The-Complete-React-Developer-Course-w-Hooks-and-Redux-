import React from 'react';
// import styled from 'styled-components'


import classes from './Person.css'


 

const person = (props) => {  
  console.log('[Person.js] rendering...');
 
  return (
    //<div className="Person" style={style}>
    <div className={classes.Person}>
       <p onClick={props.click}>Hi, I'm {props.name} and i am {props.age} years old.</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
    )
}

export default person;