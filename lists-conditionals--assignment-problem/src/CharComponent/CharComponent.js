import React from 'react';
import './CharComponent.css'


const CharComponent = (props) => { 
  
  //const letter = props.letter.length > 0 ? props.letter : " "

  return (
     <span className="CharComponent" onClick={props.click}>{props.letter}</span>
  )
}


export default CharComponent