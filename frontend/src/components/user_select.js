import React, { Component } from 'react';

export class UserSelect extends Component {
  render() {

    var users = this.props.users.map((user, i) => {
      return <option key={i}>{user.name}</option>
    })
    return (
      <select>
        {users}
      </select>);
  }
}
