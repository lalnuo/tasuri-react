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
      <table className="purchase-list pure-table pure-table-horizontal">
        <thead>
          <tr>
            <td>Päivämäärä</td>
            <td>Ostaja</td>
            <td>Tuote</td>
            <td>Hinta</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {purchases}
        </tbody>
      </table>
    );
  }
}
