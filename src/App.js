import React from 'react';
import './App.css';
import UserList from './UserList';

function App() {
  const initialUsers = [
    { name: 'John Doe', age: 30, occupation: 'Software Engineer' },
    { name: 'Jane Smith', age: 25, occupation: 'Graphic Designer' },
    { name: 'Mike Johnson', age: 35, occupation: 'Project Manager' }
  ];

  return (
    <div className="App">
      <h1>User Cards App</h1>
      <UserList users={initialUsers} />
    </div>
  );
}

export default App;
