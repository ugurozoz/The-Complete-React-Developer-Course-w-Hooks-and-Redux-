import React from 'react';
import styled from 'styled-components'


//import './Person.css'
const StyledDiv = styled.div`
width: 60%;
margin:20px auto 0px auto;
border: 1px solid #eee;
box-shadow:0 2px 3px #ccc ;
text-align: center;
padding:20px 0;

@media (min-width:500px) {      
    width:450px;      
}` 

const person = (props) => {
 
  return (
    //<div className="Person" style={style}>
    <StyledDiv>
      <p onClick={props.click}>Hi, I'm {props.name} and i am {props.age} years old.</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </StyledDiv>
      
    
    )
}

export default person;