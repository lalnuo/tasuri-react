import React, { Component } from 'react';
import { deletePurchase } from '../actions/actions';

export class Purchase extends Component {
  constructor(props) {
    super(props);
    const { purchase, user, dispatch } = this.props

    this.state = {
      name: purchase.get('name'),
      price: purchase.get('price'),
      username: user.get('name'),
      id: purchase.get('id')
    }
  }

  render() {
    const { purchase, dispatch } = this.props;
    return (
      <li>
        {this.state.username} {this.state.name} {this.state.price} <button onClick={() => dispatch(deletePurchase(this.state.id))}>Poista</button>
      </li>
    )
  }
}
