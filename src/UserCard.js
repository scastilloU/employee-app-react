import React from 'react';

function UserCard(props) {
  return (
    <div className="user-card">
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Occupation: {props.occupation}</p>
    </div>
  );
}

export default UserCard;
