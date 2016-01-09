import React, { Component } from 'react';

export class BalanceList extends Component {
  render() {
    const { users } = this.props;
    const balances = users.map(user => {
      return <pre>{ user.get('name') }: {user.get('balance')}</pre>;
    })

    return (
      <div>
        {balances}
      </div>
    );
  }
}
