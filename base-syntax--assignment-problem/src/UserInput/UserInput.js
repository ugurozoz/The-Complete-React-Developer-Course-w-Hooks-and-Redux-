import React from 'react';
import './UserInput.css';

const UserInput = (props) => {

  return (
    <div>
      <input type="text" onChange={props.change} value={props.inputValue} />
    </div>
  )

}

export default UserInput