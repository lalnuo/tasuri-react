import React, { Component } from 'react';

export class BalanceList extends Component {
  render() {
    const { users } = this.props;
    const balances = users.map(user => {
      return (<li>{user.get('name') } {user.get('balance')}</li>)
    })

    return (
      <ul>
        {balances}
      </ul>
    );
  }
}
