import React, { Component } from 'react';
import { Purchase } from './purchase';

export class PurchaseList extends Component {
  render() {
    const { users, dispatch } = this.props;
    const purchases = this.props.purchases.map(purchase => {
      let user = users.get(purchase.get('UserId'));
      return <Purchase dispatch={dispatch} user={user} purchase={purchase}/>
    });

    return (
      <ul>
        {purchases}
      </ul>
    );
  }
}
