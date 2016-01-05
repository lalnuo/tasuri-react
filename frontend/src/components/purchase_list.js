import React, { Component } from 'react';

export class PurchaseList extends Component {
  render() {
    const purchases = this.props.purchases.map(purchase => {
      return <li>{purchase.get('name')} {purchase.get('price')}</li>
    })

    return (
      <ul>
        {purchases}
      </ul>
    );
  }
}
