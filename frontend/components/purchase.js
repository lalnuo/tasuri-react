import React, { Component } from 'react';
import { deletePurchase } from '../actions/actions';

export class Purchase extends Component {
  constructor(props) {
    super(props);
    const { purchase, user, dispatch } = this.props
    console.log(purchase.get('createdAt'))
    this.state = {
      date: purchase.get('createdAt').split('T')[0], // come up with better formatting
      name: purchase.get('name'),
      price: purchase.get('price'),
      username: user.get('name'),
      id: purchase.get('id')
    }
  }

  render() {
    const { purchase, dispatch } = this.props;
    return (
      <tr>
        <td>{this.state.date}</td>
        <td>{this.state.username}</td>
        <td>{this.state.name}</td>
        <td>{this.state.price}</td>
        <td>
          <button
            className="pure-button button-warning"
            onClick={() => dispatch(deletePurchase(this.state.id))}>
           Poista
         </button><
         /td>
      </tr>
    )
  }
}
