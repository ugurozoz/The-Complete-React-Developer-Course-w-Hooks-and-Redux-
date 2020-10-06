import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {

  return (
    <div className="output" >
      <p>{props.username}</p>
      <p>Lorem Ipsum dolor sit amet</p>
    </div>
  )

}

export default UserOutput