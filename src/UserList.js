import React, { Component } from 'react';
import UserCard from './UserCard';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: this.props.users,
      newUser: {
        name: '',
        age: '',
        occupation: ''
      }
    };
  }

  // Handle input changes in the form
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      newUser: {
        ...this.state.newUser,
        [name]: value
      }
    });
  };

  // Handle form submission to add new user
  handleSubmit = (event) => {
    event.preventDefault();
    // Add new user to the state
    this.setState({
      users: [...this.state.users, this.state.newUser],
      newUser: { name: '', age: '', occupation: '' }
    });
  };

  render() {
    return (
      <div className="user-list">
        <h2>User List</h2>
        <div className="user-form">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.newUser.name}
              onChange={this.handleInputChange}
              required
            />
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={this.state.newUser.age}
              onChange={this.handleInputChange}
              required
            />
            <input
              type="text"
              name="occupation"
              placeholder="Occupation"
              value={this.state.newUser.occupation}
              onChange={this.handleInputChange}
              required
            />
            <button type="submit">Add User</button>
          </form>
        </div>
        <div className="user-cards">
          {this.state.users.map((user, index) => (
            <UserCard
              key={index}
              name={user.name}
              age={user.age}
              occupation={user.occupation}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default UserList;
