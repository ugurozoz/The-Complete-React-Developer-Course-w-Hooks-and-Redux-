import React from 'react';


const ValidationComponent = (props) => { 
  
  const style = props.textLength < 5 ? {
    color: '#f00',
    fontWeight: 'bold',    
  } : {
    color: '#099246',
    fontWeight: 'bold',

  }

  return (
     <div>
      <p style={style}>{props.textLength < 5 ? 'Text too short':'Text long enough'}</p>
    </div>
  )
}


export default ValidationComponent