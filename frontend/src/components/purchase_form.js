import React, { Component } from 'react';
import { sendPurchase } from '../actions/actions';

export class PurchaseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: 0,
      userId: null
    }
  }

  updateField(field, event) {
    let stateObject = {};
    stateObject[field] = event.target.value;
    this.setState(stateObject);
  }

  createPurchase(event) {
    event.preventDefault();
    let purchase = {
      name: this.state.name,
      price: this.state.price,
      userId: parseInt(this.state.userId)
    };
    this.props.dispatch(sendPurchase(purchase));
  }

  render() {
    const { users } = this.props;
    const options = users.map(user => {
      return <option value={user.get('id')} key={user.get('id')}>{user.get('name')}</option>
    })
    return (
      <form>
        <select value={this.state.userId} onChange={this.updateField.bind(this, 'userId')}>
          {options}
        </select>
        <input value={this.state.name} onChange={this.updateField.bind(this, 'name')} type="text"></input>
        <input value={this.state.price} onChange={this.updateField.bind(this, 'price')} type="number"></input>
        <button onClick={this.createPurchase.bind(this)}>Lisää</button>
      </form>
    );
  }
}
