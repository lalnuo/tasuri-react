import React, { Component } from 'react';

export class BalanceList extends Component {
  render() {
    const { users } = this.props;
    const balances = users.map(user => {
      return <li>{ user.get('name') }: {user.get('balance')} </li>;
    })

    return (
      <div>
        <h4 className="balance-list-header">Velkatilanne</h4>
        <ul className="balance-list">
          {balances}
        </ul>
      </div>
    );
  }
}
