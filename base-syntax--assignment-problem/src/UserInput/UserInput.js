import React from 'react';

const UserInput = (props) => {

  return (
    <div>
      <input type="text" onChange={props.change} />
    </div>
  )

}

export default UserInput