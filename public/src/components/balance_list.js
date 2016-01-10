import React, { Component } from 'react';

export class BalanceList extends Component {
  render() {
    const { users } = this.props;
    const balances = users.map(user => {
      return <h3>{ user.get('name') }: {user.get('balance')} </h3>;
    })

    return (
      <div className="balance-list">
        {balances}
      </div>
    );
  }
}
